from flask import Flask, jsonify, request, send_from_directory, make_response
from flask_cors import CORS
import os
from database.db import init_db
from services.weather_service import get_cached_weather, cache_weather, fetch_weather_data

app = Flask(__name__, static_folder='../dist', static_url_path='')
CORS(app)

@app.route('/api/weather/<city>')
def get_weather(city):
    try:
        cached_data = get_cached_weather(city)
        if cached_data:
            response = make_response(jsonify(cached_data))
            response.headers['Cache-Control'] = f'public, max-age={1800}'
            return response

        response = fetch_weather_data(city)
        
        if response.status_code == 200:
            weather_data = response.json()
            cache_weather(city, weather_data)
            
            response = make_response(jsonify(weather_data))
            response.headers['Cache-Control'] = f'public, max-age={1800}'
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