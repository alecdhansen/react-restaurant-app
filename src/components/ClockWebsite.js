import "./ClockWebsite.css";
import AboutUs from "./AboutUs/AboutUs";
import Contact from "./Contact/Contact";
import MenuPage from "./Menu/MenuPage";
import Kitchen from "./Kitchen/Kitchen";
import Container from "react-bootstrap/Container";
import INITIAL_MENU from "./Menu/menu";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function ClockWebsite() {
  const [menuItems, setMenuItems] = useState(INITIAL_MENU);
  const [page, setPage] = useState("a");
  let content;
  if (page === "a") {
    content = <MenuPage INITIAL_MENU={INITIAL_MENU} menuItems={menuItems} />;
  } else if (page === "b") {
    content = <AboutUs />;
  } else if (page === "c") {
    content = <Contact />;
  } else if (page === "d") {
    content = <Kitchen INITIAL_MENU={INITIAL_MENU} menuItems={menuItems} />;
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
              Menu - Order
            </Button>
            <Button
              variant="primary"
              type="button"
              className="navBtn"
              onClick={() => setPage("b")}
            >
              About Us
            </Button>
            <Button
              variant="primary"
              type="button"
              className="navBtn"
              onClick={() => setPage("c")}
            >
              Contact
            </Button>
            <Button
              variant="primary"
              type="button"
              className="navBtn"
              onClick={() => setPage("d")}
            >
              Kitchen
            </Button>
          </Nav>
        </Container>
      </Navbar>
      {content}
      <footer className="footer">
        <div className="footer-container">
          <p className="bottom-copywrite">
            2022 © The Clock Drive-In. Made by Alec Hansen.
          </p>
          <p className="bottom-title">The Clock Drive-In</p>
        </div>
      </footer>
    </div>
  );
}

export default ClockWebsite;
