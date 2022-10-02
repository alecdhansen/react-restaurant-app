import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

function Checkout({ orderList, removeOrder, menuItems, setOrderList }) {
  const subTotal = orderList.reduce(
    (acc, menuItems) => acc + menuItems.price,
    0
  );
  console.log(subTotal);
  const totalPrice = subTotal * 0.08 + subTotal;
  const emptyCart = (orderList) => {
    setOrderList([]);
  };
  const cart = orderList.map((orderItem) => (
    <ListGroup.Item className="d-flex justify-content-between align-items-start">
      {orderItem.title}
      <Badge bg="secondary">${orderItem.price}</Badge>
      <Button onClick={() => removeOrder(orderList.id)}>Remove</Button>
      {/* <p>Total Price: {subTotal}</p> */}
    </ListGroup.Item>
  ));

  return (
    <>
      {cart}
      <p>Subtotal - {subTotal.toFixed(2)}</p>

      <p>Tax - {(subTotal * 0.08).toFixed(2)}</p>
      <p>Total - {totalPrice.toFixed(2)}</p>
      <Button type="button" onClick={() => emptyCart(orderList)}>
        Clear Order
      </Button>
      <Button type="button">Submit Order</Button>
    </>
  );
}
export default Checkout;
