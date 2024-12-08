from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.views.static import serve
from django.conf import settings
import os
import logging
from .services import get_cached_weather, cache_weather, fetch_weather_data

logger = logging.getLogger(__name__)

# Create your views here.

@api_view(['GET'])
def get_weather(request, query):
    try:
        # Check if query is coordinates (contains comma)
        if ',' in query:
            try:
                lat, lon = map(float, query.split(','))
                query = f"{lat},{lon}"  # WeatherAPI accepts coordinates in this format
            except ValueError:
                return JsonResponse({'error': 'Invalid coordinates format'}, status=400)
        
        cached_data = get_cached_weather(query)
        if cached_data:
            response = JsonResponse(cached_data)
            response['Cache-Control'] = f'public, max-age={1800}'
            return response

        response = fetch_weather_data(query)
        
        if response.status_code == 200:
            weather_data = response.json()
            
            # Log the number of forecast days
            if 'forecast' in weather_data and 'forecastday' in weather_data['forecast']:
                num_days = len(weather_data['forecast']['forecastday'])
                logger.info(f"Number of forecast days received: {num_days}")
                if num_days < 7:
                    logger.warning(f"Expected 7 days of forecast but received {num_days} days")
            else:
                logger.error("Weather data missing forecast information")
            
            cache_weather(query, weather_data)
            
            response = JsonResponse(weather_data)
            response['Cache-Control'] = f'public, max-age={1800}'
            return response
            
        elif response.status_code == 400:
            error_data = response.json()
            logger.error(f"Weather API 400 error: {error_data}")
            return JsonResponse({'error': 'Location not found'}, status=404)
        else:
            error_data = response.json() if response.content else {'message': 'Unknown error'}
            logger.error(f"Weather API error: {error_data}")
            return JsonResponse({'error': 'Weather service unavailable'}, status=503)

    except Exception as e:
        logger.exception("Error in get_weather view")
        return JsonResponse({'error': str(e)}, status=500)

def serve_react_app(request, path=''):
    if path.startswith('api/'):
        return JsonResponse({'error': 'Not found'}, status=404)
        
    # First try to serve the exact file
    if path and os.path.exists(os.path.join(settings.REACT_APP_BUILD_PATH, path)):
        return serve(request, path, document_root=settings.REACT_APP_BUILD_PATH)
        
    # For all other routes, serve index.html to support client-side routing
    try:
        return serve(request, 'index.html', document_root=settings.REACT_APP_BUILD_PATH)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)
