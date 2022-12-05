import { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import video from "../assets/video.mp4";

const MainPage = () => {
  const [query, setQuery] = useState("");
  const [info, setInfo] = useState(null);

  const dispatch = useDispatch({
    type: "ADD_CITY_INFO",
    payload: { info },
  });

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&cnt=5&appid=5dbd7b935d142d2d2f600da3d872c733`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setInfo(data);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="main">
      <video src={video} autoPlay loop muted />

      <div className="content">
        <Row>
          <Col xs={10} className="mx-auto my-3 d-flex justify-content-center">
            <h1>Weather</h1>
          </Col>
          <Col xs={10} className="mx-auto ">
            <Form onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                value={query}
                onChange={handleChange}
                placeholder="Type and press Enter"
              />
            </Form>
          </Col>
          <Col xs={10} className="mx-auto mb-5 ">
            {info && (
              <>
                <div className="city-info">
                  <h4>{info.name}</h4>
                  <img
                    src={`http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`}
                    alt=""
                  />
                  <p>
                    {info.weather[0].description
                      .split(" ")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </p>
                  <p>
                    <strong>{info.main.temp + " ºC"}</strong>
                  </p>
                  <span className="mb-5">
                    Max <strong> {info.main.temp_max + " ºC   "}</strong>
                    Min <strong> {info.main.temp_min + " ºC"}</strong>
                  </span>
                  <button
                    onClick={() => {
                      dispatch({
                        type: "ADD_CITY_INFO",
                        payload: { info },
                      });
                    }}
                  >
                    <Link className="btn" to={"/details/" + info.name}>
                      More Details
                    </Link>
                  </button>
                </div>
              </>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MainPage;
