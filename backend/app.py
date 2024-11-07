from flask import Flask, jsonify, request, send_from_directory, make_response
from flask_cors import CORS
import os
from database.db import init_db
from services.weather_service import get_cached_weather, cache_weather, fetch_weather_data

# Update static folder path to be relative to the backend directory
app = Flask(__name__, static_folder=os.path.join(os.path.dirname(os.path.dirname(__file__)), 'dist'), static_url_path='')
CORS(app)

@app.route('/api/weather/<query>')
def get_weather(query):
    try:
        # Check if query is coordinates (contains comma)
        if ',' in query:
            lat, lon = query.split(',')
            query = f"{lat},{lon}"  # WeatherAPI accepts coordinates in this format
        
        cached_data = get_cached_weather(query)
        if cached_data:
            response = make_response(jsonify(cached_data))
            response.headers['Cache-Control'] = f'public, max-age={1800}'
            return response

        response = fetch_weather_data(query)
        
        if response.status_code == 200:
            weather_data = response.json()
            cache_weather(query, weather_data)
            
            response = make_response(jsonify(weather_data))
            response.headers['Cache-Control'] = f'public, max-age={1800}'
            return response
            
        elif response.status_code == 400:
            return jsonify({'error': 'Location not found'}), 404
        else:
            return jsonify({'error': 'Weather service unavailable'}), 503

    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Serve static files and handle client-side routing
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path.startswith('api/'):
        return jsonify({'error': 'Not found'}), 404
    if os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    init_db()
    port = int(os.getenv("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)