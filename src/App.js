import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "reactstrap";
import logo from "./app/assets/img/main.png";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutUs";
import Adoption from "./pages/Adoption";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="./pages/adoption.js" element={<Adoption />} />
      </Routes>
    </div>
  );
}

export default App;
