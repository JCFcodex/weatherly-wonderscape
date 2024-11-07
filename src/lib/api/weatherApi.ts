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
  if (!city.trim()) {
    toast.error("Please enter a city name");
    throw new Error("City name is required");
  }

  try {
    const response = await fetch(`${BASE_URL}/weather/${encodeURIComponent(city)}`);
    const data = await response.json();
    
    if (!response.ok) {
      if (response.status === 404) {
        toast.error("City not found. Please check the spelling and try again.");
      } else if (response.status === 503) {
        toast.error("Weather service is temporarily unavailable. Please try again later.");
      } else {
        toast.error("Unable to fetch weather data. Please try again later.");
      }
      throw new Error(data.error || "Failed to fetch weather data");
    }
    
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Weather API Error:", error);
      if (error.message.includes("Failed to fetch")) {
        toast.error("Network error. Please check your internet connection.");
      }
    }
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
