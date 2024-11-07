from dotenv import load_dotenv
import os

load_dotenv()

API_KEY = os.getenv('WEATHER_API_KEY' or '95225f90a68140d9bdb120731240511')
WEATHER_API_URL = "https://api.weatherapi.com/v1/forecast.json"
CACHE_DURATION = 1800  # 30 minutes in seconds