import "./ClockWebsite.css";
import AboutUs from "./AboutUs/AboutUs";
import Contact from "./Contact/Contact";
import MenuPage from "./Menu/MenuPage";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function ClockWebsite() {
  const [page, setPage] = useState("a");
  let content;
  if (page === "a") {
    content = <MenuPage />;
  } else if (page === "b") {
    content = <AboutUs />;
  } else if (page === "c") {
    content = <Contact />;
  }

  return (
    <div className="ClockWebsite">
      <Navbar bg="primary" variant="dark" className="navbar">
        <Container>
          <Navbar.Brand href="#home" className="title">
            The Clock Drive-In
          </Navbar.Brand>
          <Nav className="me-auto">
            <Button
              variant="primary"
              type="button"
              className="navBtn"
              onClick={() => setPage("a")}
            >
              Menu/Order
            </Button>{" "}
            <Button
              variant="primary"
              type="button"
              className="navBtn"
              onClick={() => setPage("b")}
            >
              About Us
            </Button>{" "}
            <Button
              variant="primary"
              type="button"
              className="navBtn"
              onClick={() => setPage("c")}
            >
              Contact
            </Button>{" "}
          </Nav>
        </Container>
      </Navbar>
      {content}
      <Navbar bg="danger" variant="dark" className="footer">
        <Container className="footer-title">
          <Navbar.Brand href="#home">The Clock Drive-In</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default ClockWebsite;
