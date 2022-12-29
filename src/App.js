import React from "react";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import logo from "./app/assets/img/main.png";

function App() {
  return (
    <div className="App">
      <Navbar dark color="light" sticky="top" expand="md">
        <Container>
          <NavbarBrand href="/">
            <img
              style={{
                width: 700,
                height: 350,
                alignItems: "center",
              }}
              src={logo}
              alt="Main Page"
            />
          </NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
