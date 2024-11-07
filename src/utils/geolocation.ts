export const getCurrentLocation = (): Promise<{ latitude: number; longitude: number }> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      (error) => {
        reject(error);
      }
    );
  });
};

export const getCityFromCoords = async (latitude: number, longitude: number): Promise<string> => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/reverse-geocode/${latitude}/${longitude}`
    );
    if (!response.ok) throw new Error('Failed to get city name');
    const data = await response.json();
    return data.city || 'Manila';
  } catch (error) {
    console.error('Error getting city name:', error);
    return 'Manila';
  }
};