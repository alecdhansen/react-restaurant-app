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
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand className="title">The Clock Drive-In</Navbar.Brand>
          <Nav>
            <Button
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
      <footer className="footer">
        <container className="footer-container">
          <p class="bottom-copywrite">
            2022 © The Clock Drive-In. Made by Alec Hansen.
          </p>
          <p className="bottom-title">The Clock Drive-In</p>
        </container>
      </footer>
    </div>
  );
}

export default ClockWebsite;
