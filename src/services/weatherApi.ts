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

export const fetchWeatherData = async (query: string): Promise<WeatherData> => {
  try {
    const response = await fetch(`http://localhost:5000/api/weather/${encodeURIComponent(query)}`);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Location not found. Please try searching with a different name.');
      }
      throw new Error('Failed to fetch weather data');
    }
    const data = await response.json();
    
    // Verify if the location data makes sense
    if (!data.location || !data.location.name) {
      throw new Error('Invalid location data received');
    }
    
    return data;
  } catch (error) {
    if (error instanceof Error) {
      toast.error(error.message);
    } else {
      toast.error('An unexpected error occurred');
    }
    throw error;
  }
};