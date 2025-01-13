import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./card.css";
import Home from "./Home";
import FormPage from "./Form_page";
import DetailsPage from "./UserDetails";
import ApiPage from "./ApiPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/api" element={<ApiPage />} />
      </Routes>
    </Router>
  );
}

export default App;
