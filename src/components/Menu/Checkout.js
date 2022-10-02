import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { nanoid } from "nanoid";

function Checkout({
  orderList,
  removeOrder,
  menuItems,
  setOrderList,
  ...props
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState([]);
  // const [allOrders, setAllOrders] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    const newInfo = {
      name,
      email,
      id: nanoid(),
    };
    setInfo(newInfo);
    setName("");
    setEmail("");
    const submittedOrder = [...orderList, totalPrice.toFixed(2), newInfo];
    // const localStorageOrders = localStorage.getItem("most-recent-order") || "[]";****
    // const parsedLocalStorageOrders = JSON.parse(localStorageOrders);*******
    localStorage.setItem("most-recent-order", JSON.stringify(submittedOrder));
    setOrderList([]);
    alert("Order Submitted!");
    console.log(submittedOrder);
  };
  const subTotal = orderList.reduce(
    (acc, menuItems) => acc + menuItems.price,
    0
  );
  const totalPrice = subTotal * 0.08 + subTotal;
  const emptyCart = () => {
    setOrderList([]);
  };
  const cart = orderList.map((orderItem) => (
    <ListGroup.Item className="d-flex justify-content-between align-items-start">
      {orderItem.title}
      <Badge bg="secondary">${orderItem.price}</Badge>
      <Button onClick={() => removeOrder(orderList.id)}>Remove</Button>
    </ListGroup.Item>
  ));
  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        View Cart
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart}
          <p>Subtotal - {subTotal.toFixed(2)}</p>
          <p>Tax - {(subTotal * 0.08).toFixed(2)}</p>
          <p>Total - {totalPrice.toFixed(2)}</p>
          <Button type="button" onClick={() => emptyCart(orderList)}>
            Clear Order
          </Button>
          <Form onSubmit={handleSubmit} className="form">
            <InputGroup className="mb-3">
              <InputGroup.Text
                id="inputGroup-sizing-default"
                className="inputs2"
              >
                Name
              </InputGroup.Text>
              <Form.Control
                type="text"
                name="name"
                placeholder="Name..."
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text
                id="inputGroup-sizing-default"
                className="inputs2"
              >
                Email Address
              </InputGroup.Text>
              <Form.Control
                type="email"
                name="text"
                placeholder="Enter email address..."
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputGroup>

            <Button type="submit" disabled={orderList === [] ? true : false}>
              Submit Order
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Checkout;
