from flask import Flask, jsonify, request, send_from_directory, make_response
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
CACHE_DURATION = 1800  # 30 minutes in seconds

def get_db():
    conn = sqlite3.connect('weather.db')
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    with get_db() as conn:
        conn.execute('''
            CREATE TABLE IF NOT EXISTS weather_cache (
                city TEXT PRIMARY KEY,
                data TEXT,
                timestamp DATETIME
            )
        ''')
        conn.execute('''
            CREATE TABLE IF NOT EXISTS recent_searches (
                city TEXT,
                timestamp DATETIME,
                PRIMARY KEY (city)
            )
        ''')
        conn.commit()

@lru_cache(maxsize=100)
def get_cached_weather(city):
    with get_db() as conn:
        result = conn.execute(
            'SELECT data, timestamp FROM weather_cache WHERE city = ?',
            (city.lower(),)
        ).fetchone()
        
        if result and datetime.strptime(result['timestamp'], '%Y-%m-%d %H:%M:%S') > datetime.now() - timedelta(minutes=30):
            return json.loads(result['data'])
    return None

def cache_weather(city, data):
    with get_db() as conn:
        conn.execute(
            'INSERT OR REPLACE INTO weather_cache (city, data, timestamp) VALUES (?, ?, ?)',
            (city.lower(), json.dumps(data), datetime.now().strftime('%Y-%m-%d %H:%M:%S'))
        )
        conn.commit()

@app.route('/api/weather/<city>')
def get_weather(city):
    try:
        cached_data = get_cached_weather(city)
        if cached_data:
            response = make_response(jsonify(cached_data))
            response.headers['Cache-Control'] = f'public, max-age={CACHE_DURATION}'
            return response

        params = {
            'key': API_KEY,
            'q': city,
            'days': 7,
            'aqi': 'no'
        }
        
        response = requests.get(WEATHER_API_URL, params=params)
        
        if response.status_code == 200:
            weather_data = response.json()
            cache_weather(city, weather_data)
            
            response = make_response(jsonify(weather_data))
            response.headers['Cache-Control'] = f'public, max-age={CACHE_DURATION}'
            return response
            
        elif response.status_code == 400:
            return jsonify({'error': 'City not found'}), 404
        else:
            return jsonify({'error': 'Weather service unavailable'}), 503

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/')
def serve_frontend():
    response = make_response(send_from_directory(app.static_folder, 'index.html'))
    response.headers['Cache-Control'] = 'public, max-age=3600'
    return response

@app.route('/<path:path>')
def serve_static(path):
    response = make_response(send_from_directory(app.static_folder, path))
    if path.endswith(('.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.svg')):
        response.headers['Cache-Control'] = 'public, max-age=31536000'
    return response

if __name__ == '__main__':
    init_db()
    port = int(os.getenv("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)