import Checkout from "./Checkout";
import Button from "react-bootstrap/Button";
import MenuList from "./MenuList";
import INITIAL_MENU from "./menu";
import { useState } from "react";

function MenuPage() {
  const [menuItems, setMenuItems] = useState(INITIAL_MENU);

  return (
    <div className="menu-page">
      <div className="menu-side">
        <MenuList menuItems={menuItems} />
      </div>
      <div className="checkout-side">
        <Checkout menuItem={menuItems} />
        {/* {menu} */}
      </div>
    </div>
  );
}

export default MenuPage;
