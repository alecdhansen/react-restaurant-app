import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MenuItem({ menuItems }) {
  const menuItemList = menuItems.map(({ id, title, tag, price, img }) => (
    <li key={id} className="card-li">
      <Card className="card">
        <Card.Img className="menu-img" variant="top" src={img} />
        <Card.Body className="card-body">
          <Card.Title>{title}</Card.Title>
          <p>{price}</p>
          <Button>Add to Order</Button>
        </Card.Body>
      </Card>
    </li>
  ));
  return <ul className="card-ul">{menuItemList}</ul>;
}

export default MenuItem;
