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
  const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  return response.json();
};

export const getCityFromCoords = async (latitude: number, longitude: number): Promise<string> => {
  const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
  if (!response.ok) {
    throw new Error('Failed to get city name from coordinates');
  }
  const data = await response.json();
  if (!data.city) {
    throw new Error('No city found for these coordinates');
  }
  return data.city;
}