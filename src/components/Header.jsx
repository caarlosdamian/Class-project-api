import React from "react";
import { Container, Navbar } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home" style={{color:"white"}}>React App</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
