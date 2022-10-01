import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

function Checkout({ orderList }) {
  const cart = orderList.map((orderItem) => (
    <ListGroup.Item className="d-flex justify-content-between align-items-start">
      {orderItem.title}
      <Badge bg="secondary">${orderItem.price}</Badge>
    </ListGroup.Item>
  ));

  return <>{cart}</>;
}
export default Checkout;
