from flask import Flask, jsonify, request, send_from_directory, make_response
from flask_cors import CORS
import os
from database.db import init_db
from services.weather_service import get_cached_weather, cache_weather, fetch_weather_data

# Get the absolute path to the dist directory
current_dir = os.path.dirname(os.path.abspath(__file__))
dist_dir = os.path.join(os.path.dirname(current_dir), 'dist')

# Ensure the dist directory exists
if not os.path.exists(dist_dir):
    raise Exception(f"Directory {dist_dir} does not exist. Please run 'npm run build' first.")

app = Flask(__name__, static_folder=dist_dir)
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

# Serve React App - All routes except /api/* will serve index.html
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path.startswith('api/'):
        return jsonify({'error': 'Not found'}), 404
        
    # First try to serve the exact file
    if path and os.path.exists(os.path.join(dist_dir, path)):
        return send_from_directory(dist_dir, path)
        
    # For all other routes, serve index.html to support client-side routing
    try:
        return send_from_directory(dist_dir, 'index.html')
    except Exception as e:
        print(f"Error serving file: {str(e)}")
        return f"Error: {str(e)}", 500

if __name__ == '__main__':
    init_db()
    port = int(os.getenv("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
