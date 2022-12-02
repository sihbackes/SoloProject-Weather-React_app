import "./App.css";
import MainPage from "./components/MainPageComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherDetails from "./components/WeatherDetailsComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/details/:city" element={<WeatherDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
