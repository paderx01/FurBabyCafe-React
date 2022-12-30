import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import logo from "./app/assets/img/main.png";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutUs";
import Adoption from "./pages/Adoption";

function App() {
  return (
    <div className="App">
      <Container>
        <img
          style={{
            width: 700,
            height: 350,
            alignItems: "center",
          }}
          src={logo}
          alt="Main Page"
        />
      </Container>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path=".aboutus" element={<AboutPage />} />
        <Route path="./pages/adoption.js" element={<Adoption />} />
      </Routes>
    </div>
  );
}

export default App;
