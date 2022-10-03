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
  const [phone, setPhone] = useState("");
  const [info, setInfo] = useState([]);
  // const [allOrders, setAllOrders] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    const newInfo = {
      name,
      email,
      phone,
      id: nanoid(),
    };
    setInfo(newInfo);
    setName("");
    setEmail("");
    setPhone("");
    const submittedOrder = [...orderList, totalPrice.toFixed(2), newInfo];
    // const localStorageOrders =
    //   localStorage.getItem("most-recent-order") || "[]";
    // const parsedLocalStorageOrders = JSON.parse(localStorageOrders);
    // console.log(parsedLocalStorageOrders, "is the last order");
    localStorage.setItem("most-recent-order", JSON.stringify(submittedOrder));
    setOrderList([]);
    alert("Order Submitted!");

    console.log(submittedOrder, "is the current order submitted");
    handleClose();
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
    <div className="order-item">
      <ListGroup.Item className="d-flex justify-content-between align-items-center cart-item-title">
        {orderItem.title}
        <Badge bg="dark">${orderItem.price}</Badge>
        <Button
          className="remove-button bttn"
          onClick={() => removeOrder(orderList.id)}
        >
          Remove
        </Button>
      </ListGroup.Item>
    </div>
  ));
  return (
    <div>
      <Button
        variant="primary"
        onClick={handleShow}
        className="view-cart-button bttn"
      >
        View Cart
        <span className="order-length">{orderList.length}</span>
      </Button>
      <Offcanvas
        className="checkout-screen"
        placement="end"
        show={show}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="order-title">Your Order</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart}
          <div className="totals-plus-button">
            <div>
              <p>Subtotal - ${subTotal.toFixed(2)}</p>
              <p>Tax (6%) - ${(subTotal * 0.08).toFixed(2)}</p>
              <p className="totalprice">Total - ${totalPrice.toFixed(2)}</p>
            </div>
            <div>
              <Button
                className="clear-order-button bttn"
                type="button"
                onClick={() => emptyCart(orderList)}
              >
                Clear Order
              </Button>
            </div>
          </div>
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
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text
                id="inputGroup-sizing-default"
                className="inputs2"
              >
                Phone Number
              </InputGroup.Text>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Enter phone number..."
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </InputGroup>
            <Button
              className="submit-order-button bttn"
              type="submit"
              disabled={orderList === [] ? true : false}
            >
              Submit Order
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Checkout;
