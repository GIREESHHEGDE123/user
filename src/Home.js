import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="main">
      <h1>
        <strong>Hello,Welcome</strong>
      </h1>
      <div className="home">
        <Link to="/form">
          <button className="form">Form</button>
        </Link>
        <Link to="/api">
          <button className="api">API</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
