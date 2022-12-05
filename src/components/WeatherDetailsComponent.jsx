import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import video from "../assets/video.mp4";

const WeatherDetails = () => {
  const info = useSelector((state) => state.weatherDetails.content);
  const city = info.info;
  return (
    <div className="main">
      <video src={video} autoPlay loop muted />

      <div className="content">
        <Row>
          <Col xs={10} className="mx-auto mb-5">
            <div className="mt-5 city-info-details">
              <h3>{city.name}</h3>
              <img
                src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
                alt=""
              />

              <p>
                {city.weather[0].description
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </p>
              <p>
                <strong>{city.main.temp + " ºC"}</strong>
              </p>
              <p>
                Feels Like <strong>{city.main.feels_like}</strong>
              </p>
              <p>
                Humidity <strong>{city.main.humidity}</strong>
              </p>
              <p>
                Wind Speed <strong>{city.wind.speed}</strong>
              </p>
              <p>
                <span>
                  Max <strong> {city.main.temp_max + " ºC   "}</strong>
                  Min <strong> {city.main.temp_min + " ºC"}</strong>
                </span>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default WeatherDetails;
