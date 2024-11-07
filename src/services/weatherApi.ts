export interface WeatherData {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    wind_kph: number;
    humidity: number;
    uv: number;
  };
  forecast: {
    forecastday: Array<{
      date: string;
      day: {
        maxtemp_c: number;
        mintemp_c: number;
        condition: {
          text: string;
          icon: string;
        };
      };
      hour: Array<{
        time: string;
        temp_c: number;
      }>;
    }>;
  };
}

export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
  const response = await fetch(`http://localhost:5000/api/weather/${encodeURIComponent(city)}`);
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  return response.json();
};

export const getCityFromCoords = async (latitude: number, longitude: number): Promise<string> => {
  try {
    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
    const data = await response.json();
    return data.city || 'Manila';
  } catch (error) {
    console.error('Error getting city name:', error);
    return 'Manila';
  }
}