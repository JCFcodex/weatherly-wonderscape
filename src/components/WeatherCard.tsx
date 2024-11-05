import { Card } from "@/components/ui/card";
import { WeatherIcon } from "./WeatherIcon";
import { WeatherData } from "@/services/weatherApi";

interface WeatherCardProps {
  weather: WeatherData;
}

export const WeatherCard = ({ weather }: WeatherCardProps) => {
  return (
    <Card className="w-full max-w-md mx-auto p-6 backdrop-blur-lg bg-white/80 animate-fade-in">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-secondary-foreground">
          {weather.location.name}, {weather.location.country}
        </h2>
        <div className="mt-4 flex justify-center items-center">
          <WeatherIcon
            condition={weather.current.condition.text}
            className="w-16 h-16"
          />
          <span className="text-6xl ml-4 text-secondary-foreground">
            {Math.round(weather.current.temp_c)}°C
          </span>
        </div>
        <p className="text-secondary mt-2">{weather.current.condition.text}</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <p className="text-secondary text-sm">Wind</p>
          <p className="text-secondary-foreground font-medium">
            {weather.current.wind_kph} km/h
          </p>
        </div>
        <div className="text-center">
          <p className="text-secondary text-sm">Humidity</p>
          <p className="text-secondary-foreground font-medium">
            {weather.current.humidity}%
          </p>
        </div>
        <div className="text-center">
          <p className="text-secondary text-sm">UV Index</p>
          <p className="text-secondary-foreground font-medium">
            {weather.current.uv}
          </p>
        </div>
      </div>

      <div className="space-y-2">
        {weather.forecast.forecastday.map((day) => (
          <div
            key={day.date}
            className="flex items-center justify-between py-2 border-t border-gray-100"
          >
            <span className="text-secondary">
              {new Date(day.date).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </span>
            <div className="flex items-center">
              <WeatherIcon
                condition={day.day.condition.text}
                className="w-6 h-6 mr-2"
              />
              <span className="text-secondary-foreground">
                {Math.round(day.day.mintemp_c)}° -{" "}
                {Math.round(day.day.maxtemp_c)}°
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};