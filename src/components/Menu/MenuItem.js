import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";

function MenuItem({ menuItems, ...props }) {
  const [filter, setFilter] = useState("");

  const tagList = [...new Set(menuItems.map((menuItem) => menuItem.tag))];
  const tagListHTML = tagList.map((tag, index) => (
    <Button className="nav-button" key={index} onClick={(e) => setFilter(tag)}>
      {tag}
    </Button>
  ));

  const menuItemListHTML = menuItems
    .filter((menuItem) => (filter ? menuItem.tag === filter : menuItem))
    .map(({ id, title, tag, price, img, menuItem }) => (
      <li key={id} className="card-li">
        <Card className="card">
          <Card.Img className="menu-img" variant="top" src={img} />
          <Card.Body className="card-body">
            <Card.Title>{title}</Card.Title>
            <p>{price}</p>
            <Button type="button" onClick={() => props.addOrder(id)}>
              Add to Order
            </Button>
          </Card.Body>
        </Card>
      </li>
    ));
  return (
    <div className="nav-plus-menu">
      <nav className="sort-nav">
        <Button className="nav-button-all" onClick={(e) => setFilter(null)}>
          All
        </Button>
        {tagListHTML}
      </nav>
      <ul className="card-ul">{menuItemListHTML}</ul>
    </div>
  );
}

export default MenuItem;
