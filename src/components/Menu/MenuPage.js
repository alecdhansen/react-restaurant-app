import Checkout from "./Checkout";
import Button from "react-bootstrap/Button";
import MenuList from "./MenuList";
import INITIAL_MENU from "./menu";
import { useState } from "react";

function MenuPage() {
  const [menuItems, setMenuItems] = useState(INITIAL_MENU);
  const [orderList, setOrderList] = useState([]);
  // console.log(menuItems);
  const addOrder = (id) => {
    const index = menuItems.findIndex((menuItem) => menuItem.id === id);
    const newOrderItem = menuItems[index];
    // console.log(newOrderItem);
    setOrderList([...orderList, newOrderItem]);
  };
  return (
    <div className="menu-page">
      <div className="menu-side">
        <MenuList menuItems={menuItems} addOrder={addOrder} />
      </div>
      <div className="checkout-side">
        <Checkout menuItems={menuItems} orderList={orderList} />
        {/* {menu} */}
      </div>
    </div>
  );
}

export default MenuPage;
