from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
import sqlite3
import requests
import os
import json
from datetime import datetime, timedelta
from dotenv import load_dotenv
from functools import lru_cache

load_dotenv()

app = Flask(__name__, static_folder='../dist', static_url_path='')
CORS(app)
API_KEY = os.getenv('WEATHER_API_KEY' or '95225f90a68140d9bdb120731240511')
WEATHER_API_URL = "https://api.weatherapi.com/v1/forecast.json"

def get_db():
    conn = sqlite3.connect('weather.db')
    conn.row_factory = sqlite3.Row
    return conn

@lru_cache(maxsize=100)
def get_cached_weather(city):
    conn = get_db()
    c = conn.cursor()
    c.execute('SELECT data, timestamp FROM weather_cache WHERE city = ?', (city.lower(),))
    result = c.fetchone()
    conn.close()
    
    if result and datetime.strptime(result[1], '%Y-%m-%d %H:%M:%S') > datetime.now() - timedelta(minutes=30):
        return json.loads(result[0])
    return None

def cache_weather(city, data):
    conn = get_db()
    c = conn.cursor()
    c.execute('INSERT OR REPLACE INTO weather_cache (city, data, timestamp) VALUES (?, ?, ?)',
              (city.lower(), json.dumps(data), datetime.now().strftime('%Y-%m-%d %H:%M:%S')))
    conn.commit()
    conn.close()

@app.route('/api/weather/<city>')
def get_weather(city):
    cached = get_cached_weather(city)
    if cached:
        return jsonify(cached)

    try:
        response = requests.get(WEATHER_API_URL, 
            params={'key': API_KEY, 'q': city, 'days': 7, 'aqi': 'no'},
            timeout=5
        )
        
        if response.status_code == 200:
            weather_data = response.json()
            cache_weather(city, weather_data)
            return jsonify(weather_data)
        return jsonify({'error': 'City not found'}), 404

    except requests.Timeout:
        return jsonify({'error': 'Request timeout'}), 408
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=int(os.getenv("PORT", 5000)))