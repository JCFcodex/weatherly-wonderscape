from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3
import requests
import os
import json
from datetime import datetime, timedelta

app = Flask(__name__)
CORS(app)

API_KEY = "95225f90a68140d9bdb120731240511"
WEATHER_API_URL = "https://api.weatherapi.com/v1/forecast.json"

def init_db():
    conn = sqlite3.connect('weather.db')
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS weather_cache (
            city TEXT PRIMARY KEY,
            data TEXT,
            timestamp DATETIME
        )
    ''')
    c.execute('''
        CREATE TABLE IF NOT EXISTS recent_searches (
            city TEXT,
            timestamp DATETIME,
            PRIMARY KEY (city)
        )
    ''')
    conn.commit()
    conn.close()

def get_cached_weather(city):
    conn = sqlite3.connect('weather.db')
    c = conn.cursor()
    c.execute('SELECT data, timestamp FROM weather_cache WHERE city = ?', (city.lower(),))
    result = c.fetchone()
    conn.close()
    
    if result and datetime.strptime(result[1], '%Y-%m-%d %H:%M:%S') > datetime.now() - timedelta(minutes=30):
        return json.loads(result[0])
    return None

def cache_weather(city, data):
    conn = sqlite3.connect('weather.db')
    c = conn.cursor()
    c.execute('INSERT OR REPLACE INTO weather_cache (city, data, timestamp) VALUES (?, ?, ?)',
              (city.lower(), json.dumps(data), datetime.now().strftime('%Y-%m-%d %H:%M:%S')))
    conn.commit()
    conn.close()

def update_recent_searches(city):
    conn = sqlite3.connect('weather.db')
    c = conn.cursor()
    c.execute('INSERT OR REPLACE INTO recent_searches (city, timestamp) VALUES (?, ?)',
              (city.lower(), datetime.now().strftime('%Y-%m-%d %H:%M:%S')))
    conn.commit()
    conn.close()

@app.route('/api/weather/<city>')
def get_weather(city):
    try:
        # Check cache first
        cached_data = get_cached_weather(city)
        if cached_data:
            return jsonify(cached_data)

        # If not in cache, fetch from API
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
            update_recent_searches(city)
            return jsonify(weather_data)
        else:
            return jsonify({'error': 'Failed to fetch weather data'}), 400

    except Exception as e:
        print(f"Error in get_weather: {str(e)}")  # Add logging for debugging
        return jsonify({'error': str(e)}), 500

@app.route('/api/recent-searches')
def get_recent_searches():
    conn = sqlite3.connect('weather.db')
    c = conn.cursor()
    c.execute('SELECT city FROM recent_searches ORDER BY timestamp DESC LIMIT 5')
    recent = [row[0] for row in c.fetchall()]
    conn.close()
    return jsonify(recent)

if __name__ == '__main__':
    init_db()
    app.run(debug=True, port=5000)