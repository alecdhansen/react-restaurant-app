import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useState, useRef } from "react";

function MenuItem({ menuItems, ...props }) {
  const [filter, setFilter] = useState("");
  const tagList = [...new Set(menuItems.map((menuItem) => menuItem.tag))];
  const tagListHTML = tagList.map((tag, index) => (
    <Button
      className="nav-button bttn"
      key={index}
      onClick={(e) => setFilter(tag)}
    >
      {tag}
    </Button>
  ));

  const menuItemListHTML = menuItems
    .filter((menuItem) => (filter ? menuItem.tag === filter : menuItem))
    .map(({ id, title, tag, price, img, menuItem, description }) => (
      <li key={id} className="card-li">
        <Card className="card">
          <Card.Img className="menu-img" variant="top" src={img} />
          <Card.Body className="card-body">
            <Card.Title>{title}</Card.Title>
            <p>{description}</p>
            <p>${price}</p>

            <Button
              className="add-to-order-button bttn"
              type="button"
              onClick={() => props.addOrder(id)}
            >
              Add to Order
            </Button>
          </Card.Body>
        </Card>
      </li>
    ));
  return (
    <div className="nav-plus-menu">
      <nav className="sort-nav">
        <ButtonGroup aria-label="Basic example">
          <Button className="nav-button-all" onClick={(e) => setFilter(null)}>
            All
          </Button>
          {tagListHTML}
        </ButtonGroup>
      </nav>
      <ul className="card-ul">{menuItemListHTML}</ul>
    </div>
  );
}

export default MenuItem;
