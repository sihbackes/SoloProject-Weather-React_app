import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

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
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Type the City</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="Type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {info && (
            <>
              <h4>{info.name}</h4>
              <p>{info.main.temp + " ºC"}</p>
              <button
                onClick={() => {
                  dispatch({
                    type: "ADD_CITY_INFO",
                    payload: { info },
                  });
                }}
              >
                <Link to={"/details/" + info.name}> More Details</Link>
              </button>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
