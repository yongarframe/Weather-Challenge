import { format } from "date-fns";
import styled from "styled-components";

const WeatherList = styled.ul`
  /* border: 1px solid black; */
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 10%;
  border-radius: 10px;
  background-color: #1594ee;
  box-shadow: 5px 5px 3px #666;
  padding: 10px 5px;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  li {
    list-style-type: none;
    color: #d1d2bc;
  }
  img {
  }
`;

function Weather({ weatherli }) {
  const iconNumber = weatherli.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconNumber}@2x.png`;
  return (
    <WeatherList>
      <li>{format(new Date(weatherli.dt_txt), "MM월 dd일 (eee) HH시")}</li>
      <img src={iconUrl} />
      <li>{weatherli.weather[0].description}</li>
      <li>온도 : {Math.round(weatherli.main.temp)}°C</li>
    </WeatherList>
  );
}

export default Weather;
