async function WeatherCall(url, setData) {
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setData(data);
    });
}

export default WeatherCall;
