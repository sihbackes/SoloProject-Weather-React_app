import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

const WeatherDetails = () => {
  const info = useSelector((state) => state.weatherDetails.content);
  const city = info.info;
  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto mb-5">
          <p>{city.name}</p>
          <p>{city.main.temp + " ºC"}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default WeatherDetails;
