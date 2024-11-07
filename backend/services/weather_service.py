from functools import lru_cache
import json
from datetime import datetime, timedelta
import requests
from database.db import get_db
from config.config import API_KEY, WEATHER_API_URL

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

def fetch_weather_data(city):
    params = {
        'key': API_KEY,
        'q': city,
        'days': 7,
        'aqi': 'no'
    }
    
    return requests.get(WEATHER_API_URL, params=params)