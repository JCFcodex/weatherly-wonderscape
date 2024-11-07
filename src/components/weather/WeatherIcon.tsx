import { Cloud, CloudRain, CloudSnow, CloudLightning, CloudFog, CloudSun, Sun, Wind } from "lucide-react";

interface WeatherIconProps {
  condition: string;
  className?: string;
}

export const WeatherIcon = ({ condition, className = "" }: WeatherIconProps) => {
  const getIcon = () => {
    const lowerCondition = condition.toLowerCase();
    if (lowerCondition.includes("sun") || lowerCondition.includes("clear")) {
      return <Sun className={`text-weather-sunny ${className}`} />;
    }
    if (lowerCondition.includes("rain")) {
      return <CloudRain className={`text-weather-rainy ${className}`} />;
    }
    if (lowerCondition.includes("snow")) {
      return <CloudSnow className={`text-weather-snowy ${className}`} />;
    }
    if (lowerCondition.includes("thunder") || lowerCondition.includes("storm")) {
      return <CloudLightning className={`text-weather-stormy ${className}`} />;
    }
    if (lowerCondition.includes("mist") || lowerCondition.includes("fog")) {
      return <CloudFog className={`text-weather-cloudy ${className}`} />;
    }
    if (lowerCondition.includes("cloud")) {
      return <Cloud className={`text-weather-cloudy ${className}`} />;
    }
    if (lowerCondition.includes("wind")) {
      return <Wind className={`text-weather-cloudy ${className}`} />;
    }
    return <CloudSun className={`text-weather-sunny ${className}`} />;
  };

  return getIcon();
};