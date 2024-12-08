import requests
from django.conf import settings
from .models import WeatherCache
import os
from dotenv import load_dotenv
import logging

logger = logging.getLogger(__name__)

load_dotenv()

API_KEY = os.getenv('WEATHER_API_KEY')
WEATHER_API_URL = os.getenv('WEATHER_API_URL', 'http://api.weatherapi.com/v1/forecast.json')

if not API_KEY:
    raise Exception("WEATHER_API_KEY environment variable is not set")

def get_cached_weather(city):
    try:
        cache = WeatherCache.objects.get(city=city.lower())
        if cache.is_valid():
            return cache.data
        cache.delete()
    except WeatherCache.DoesNotExist:
        pass
    except Exception as e:
        logger.error(f"Error getting cached weather: {str(e)}")
    return None

def cache_weather(city, data):
    try:
        WeatherCache.objects.update_or_create(
            city=city.lower(),
            defaults={'data': data}
        )
    except Exception as e:
        logger.error(f"Error caching weather: {str(e)}")

def fetch_weather_data(city):
    try:
        params = {
            'key': API_KEY,
            'q': city,
            'days': 7,  # Explicitly request 7 days
            'aqi': 'no'
        }
        
        logger.info(f"Fetching weather data for {city} with params: {params}")
        response = requests.get(WEATHER_API_URL, params=params)
        
        if response.status_code == 200:
            data = response.json()
            if 'forecast' in data and 'forecastday' in data['forecast']:
                logger.info(f"Received {len(data['forecast']['forecastday'])} days of forecast data")
            else:
                logger.error("Response missing forecast data")
        else:
            logger.error(f"Weather API error: {response.text}")
            
        return response
    except Exception as e:
        logger.error(f"Error fetching weather data: {str(e)}")
        raise
