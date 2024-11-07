import { useState, useEffect } from 'react';
import { toast } from 'sonner';

interface Location {
  lat: number;
  lon: number;
}

export const useGeolocation = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLocation = () => {
      if (!navigator.geolocation) {
        toast.error('Geolocation is not supported by your browser');
        setLoading(false);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
          setLoading(false);
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              toast.error('Please enable location access to get local weather updates');
              break;
            case error.POSITION_UNAVAILABLE:
              toast.error('Location information is unavailable');
              break;
            case error.TIMEOUT:
              toast.error('Location request timed out');
              break;
            default:
              toast.error('An unknown error occurred');
          }
          setLoading(false);
        }
      );
    };

    getLocation();
  }, []);

  return { location, loading };
};