function locationCall() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const currentlat = position.coords.latitude;
        const currentlon = position.coords.longitude;
        resolve({ lat: currentlat, lon: currentlon });
      },
      (error) => {
        console.error("위치 정보를 가져오는 데 실패했습니다.", error);
        reject(error);
      }
    );
  });
}

async function getLocation(setLocation, setError) {
  try {
    setLocation(await locationCall());
  } catch (err) {
    setError(err);
  }
}

export default getLocation;
