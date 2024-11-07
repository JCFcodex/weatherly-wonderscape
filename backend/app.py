from flask import Flask, jsonify
from flask_cors import CORS
import requests
from config.config import WEATHER_API_KEY

app = Flask(__name__)
CORS(app)

@app.route('/api/weather/<city>')
def get_weather(city):
    try:
        url = f"http://api.weatherapi.com/v1/forecast.json?key={WEATHER_API_KEY}&q={city}&days=7"
        response = requests.get(url)
        data = response.json()
        return jsonify(data)
    except Exception as e:
        print(f"Error fetching weather data: {e}")
        return jsonify({"error": "Failed to fetch weather data"}), 500

@app.route('/api/reverse-geocode/<lat>/<lon>')
def reverse_geocode(lat, lon):
    try:
        url = f"http://api.weatherapi.com/v1/search.json?key={WEATHER_API_KEY}&q={lat},{lon}"
        response = requests.get(url)
        data = response.json()
        if data and len(data) > 0:
            location_name = data[0]["name"]
            return jsonify({"city": location_name})
        return jsonify({"city": "Manila"})
    except Exception as e:
        print(f"Error in reverse geocoding: {e}")
        return jsonify({"city": "Manila"})

if __name__ == '__main__':
    app.run(debug=True)