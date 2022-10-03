import Button from "react-bootstrap/Button";
import { useState } from "react";

function Kitchen({ INITIAL_MENU, menuItems, id }) {
  const [show, setShow] = useState(false);
  const localStorageOrders = localStorage.getItem("most-recent-order") || "[]";
  const parsedLocalStorageOrders = JSON.parse(localStorageOrders);
  //   console.log(parsedLocalStorageOrders);

  const getLocalStorageOrder = parsedLocalStorageOrders.map(
    (parsedLocalStorageOrder) => (
      <div>
        {parsedLocalStorageOrder.title}
        {parsedLocalStorageOrder.name}
      </div>
    )
  );
  const getOrder = () => {
    // console.log(parsedLocalStorageOrders);
    return <div key={id}>{getLocalStorageOrder}</div>;
  };

  return (
    <div className="kitchen-div">
      <Button type="button" onClick={() => setShow(!show)()}>
        View Current Order
      </Button>

      {!show ? null : (
        <div className="order">
          Order:
          <div className="order1">{getLocalStorageOrder}</div>
        </div>
      )}
    </div>
  );
}
export default Kitchen;
