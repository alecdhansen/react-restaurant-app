import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";

function MenuItem({ menuItems, ...props }) {
  const [filter, setFilter] = useState("");

  const tagList = [...new Set(menuItems.map((menuItem) => menuItem.tag))];
  const tagListHTML = tagList.map((tag, index) => (
    <Button key={index} onClick={(e) => setFilter(tag)} className="btn2-4">
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
            {/* console.log(title) */}
            <p>{price}</p>
            <Button type="button" onClick={() => props.addOrder(id)}>
              Add to Order
            </Button>
          </Card.Body>
        </Card>
      </li>
    ));
  return (
    <>
      <nav>
        <Button onClick={(e) => setFilter(null)}>All</Button>
        {tagListHTML}
      </nav>
      <ul className="card-ul">{menuItemListHTML}</ul>
    </>
  );
}

export default MenuItem;
