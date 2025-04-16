import { useEffect, useState } from "react";
import getLocation from "./functions/location";
import WeatherCall from "./functions/weatherCall";
import { APIKEY } from "./functions/apikey";
import Weather from "./components/Weather";
import styled, { createGlobalStyle } from "styled-components";

const Divcontainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-left: 10px;
`;

const GlovalStyle = createGlobalStyle`
*{padding: 0;
  margin:0;
}
  
`;

function App() {
  const [location, setLocation] = useState({ lat: 38, lon: 128 });
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  // const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${APIKEY}&lang=kr&units=metric`;

  useEffect(() => {
    getLocation(setLocation, setError);
  }, []);

  useEffect(() => {
    if (location.lat && location.lon) {
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${APIKEY}&lang=kr&units=metric`;
      WeatherCall(url, setData);
    }
  }, [location]);

  // console.log(location);

  console.log(data);
  const weatherList = data.list;
  return (
    <>
      <GlovalStyle />
      <Divcontainer>
        {data.list &&
          weatherList.map((item, index) => (
            <Weather key={index} weatherli={item} />
          ))}
      </Divcontainer>
    </>
  );
}

export default App;
