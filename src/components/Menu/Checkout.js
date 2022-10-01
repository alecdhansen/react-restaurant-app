import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

function Checkout({ orderList, removeOrder }) {
  const cart = orderList.map((orderItem) => (
    <ListGroup.Item className="d-flex justify-content-between align-items-start">
      {orderItem.title}
      <Button onClick={() => removeOrder(orderList.id)}></Button>
      <Badge bg="secondary">${orderItem.price}</Badge>
    </ListGroup.Item>
  ));

  return <>{cart}</>;
}
export default Checkout;
