from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
import requests
import os
import json
from datetime import datetime, timedelta
from dotenv import load_dotenv
from supabase import create_client, Client

load_dotenv()

app = Flask(__name__, static_folder='../dist', static_url_path='')
CORS(app)

API_KEY = os.getenv('WEATHER_API_KEY')
WEATHER_API_URL = "https://api.weatherapi.com/v1/forecast.json"

# Initialize Supabase client
supabase_url = os.getenv('SUPABASE_URL')
supabase_key = os.getenv('SUPABASE_KEY')
supabase: Client = create_client(supabase_url, supabase_key)

def get_cached_weather(city):
    result = supabase.table('weather_cache').select('*').eq('city', city.lower()).execute()
    if result.data:
        cached_data = result.data[0]
        cache_time = datetime.fromisoformat(cached_data['timestamp'].replace('Z', '+00:00'))
        if cache_time > datetime.now(cache_time.tzinfo) - timedelta(minutes=30):
            return cached_data['data']
    return None

def cache_weather(city, data):
    supabase.table('weather_cache').upsert({
        'city': city.lower(),
        'data': data,
        'timestamp': datetime.now().isoformat()
    }).execute()

def update_recent_searches(city):
    supabase.table('recent_searches').upsert({
        'city': city.lower(),
        'timestamp': datetime.now().isoformat()
    }).execute()

@app.route('/api/weather/<city>')
def get_weather(city):
    try:
        cached_data = get_cached_weather(city)
        if cached_data:
            return jsonify(cached_data)

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
        elif response.status_code == 400:
            return jsonify({'error': 'City not found. Please enter a valid city name.'}), 404
        else:
            return jsonify({'error': 'Weather service is temporarily unavailable.'}), 503

    except Exception as e:
        return jsonify({'error': 'An unexpected error occurred. Please try again later.'}), 500

@app.route('/api/recent-searches')
def get_recent_searches():
    result = supabase.table('recent_searches').select('city').order('timestamp', desc=True).limit(5).execute()
    recent = [item['city'] for item in result.data]
    return jsonify(recent)

@app.route('/')
def serve_frontend():
    return send_from_directory(app.static_folder, 'index.html')

@app.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    port = int(os.getenv("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)