import Checkout from "./Checkout";
import MenuList from "./MenuList";
import INITIAL_MENU from "./menu";
import Example from "./Checkout";
import { useState } from "react";

function MenuPage() {
  const [menuItems, setMenuItems] = useState(INITIAL_MENU);
  const [orderList, setOrderList] = useState([]);
  const [totalCost, setTotalCost] = useState([]);

  // console.log(menuItems);

  const addOrder = (id) => {
    const index = menuItems.findIndex((menuItem) => menuItem.id === id);
    const newOrderItem = menuItems[index];
    setOrderList([...orderList, newOrderItem]);
  };

  const removeOrder = (id) => {
    const index = orderList.findIndex((newOrderItem) => newOrderItem.id === id);
    const updatedOrderList = [...orderList];
    updatedOrderList.splice(index, 1);
    setOrderList(updatedOrderList);
  };

  return (
    <div className="mp1">
      <div className="menu-page">
        <div className="checkout-side">
          <Checkout
            menuItems={menuItems}
            orderList={orderList}
            removeOrder={removeOrder}
            setOrderList={setOrderList}
          />
        </div>
        <div className="menu-side">
          <MenuList menuItems={menuItems} addOrder={addOrder} />
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
