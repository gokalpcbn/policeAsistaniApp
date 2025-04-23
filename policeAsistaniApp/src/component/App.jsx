import { useState } from "react";
import "../index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="navbar">
        <a href="/kasko" className="nav-button">
          KASKO
        </a>
        <a href="/trafik" className="nav-button">
          TRAFİK
        </a>
        <a href="/dask" className="nav-button">
          DASK
        </a>
        <a href="/saglik" className="nav-button">
          SAĞLIK
        </a>
        <a href="/saglik" className="nav-button">
          KONUT
        </a>
        <a href="/saglik" className="nav-button">
          SEYAHAT
        </a>
      </div>
    </>
  );
}

export default App;
