import { Routes, Route, Link, useLocation } from "react-router-dom";
import Header from "./Header";
import CarInsurance from "./insurance/CarInsurance";
import TrafficInsurance from "./insurance/TrafficInsurance";
import HealthInsurance from "./insurance/HealthInsurance";
import HomeInsurance from "./insurance/HomeInsurance";
import TravelInsurance from "./insurance/TravelInsurance";
import DaskInsurance from "./insurance/DaskInsurance";
import Home from "../pages/Home";
import About from "../pages/About";

function App() {
  const location = useLocation();

  // Ana sayfada navbar gizli
  const showNavbar = location.pathname !== "/";

  return (
    <>
      <Header />

      {showNavbar && (
        <div className="navbar">
          <Link to="/kasko" className="nav-button">
            KASKO
          </Link>
          <Link to="/trafik" className="nav-button">
            TRAFİK
          </Link>
          <Link to="/dask" className="nav-button">
            DASK
          </Link>
          <Link to="/saglik" className="nav-button">
            SAĞLIK
          </Link>
          <Link to="/konut" className="nav-button">
            KONUT
          </Link>
          <Link to="/seyahat" className="nav-button">
            SEYAHAT
          </Link>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kasko" element={<CarInsurance />} />
        <Route path="/trafik" element={<TrafficInsurance />} />
        <Route path="/saglik" element={<HealthInsurance />} />
        <Route path="/konut" element={<HomeInsurance />} />
        <Route path="/dask" element={<DaskInsurance />} />
        <Route path="/seyahat" element={<TravelInsurance />} />
        <Route path="/hakkinda" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
