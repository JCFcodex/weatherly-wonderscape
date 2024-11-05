import { toast } from "sonner";

const BASE_URL = "http://localhost:5000/api";

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
    }>;
  };
}

export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
  try {
    const response = await fetch(`${BASE_URL}/weather/${encodeURIComponent(city)}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    
    return await response.json();
  } catch (error) {
    toast.error("Failed to fetch weather data");
    throw error;
  }
};

export const fetchRecentSearches = async (): Promise<string[]> => {
  try {
    const response = await fetch(`${BASE_URL}/recent-searches`);
    if (!response.ok) {
      throw new Error('Failed to fetch recent searches');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching recent searches:', error);
    return [];
  }
};