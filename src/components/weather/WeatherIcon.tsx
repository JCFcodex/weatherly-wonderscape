import { Cloud, Sun, Rain, Snow, Thunderstorm, Mist } from "lucide-react";

interface WeatherIconProps {
  condition: string;
  className?: string;
}

export const WeatherIcon = ({ condition, className }: WeatherIconProps) => {
  switch (condition.toLowerCase()) {
    case "sunny":
      return <Sun className={className} />;
    case "cloudy":
      return <Cloud className={className} />;
    case "rain":
      return <Rain className={className} />;
    case "snow":
      return <Snow className={className} />;
    case "thunderstorm":
      return <Thunderstorm className={className} />;
    case "mist":
      return <Mist className={className} />;
    default:
      return <Cloud className={className} />;
  }
};
