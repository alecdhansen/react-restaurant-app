import Checkout from "./Checkout";
import MenuList from "./MenuList";
import INITIAL_MENU from "./menu";
import { useState } from "react";

const FILTER_OPTIONS = {
  all: (menuItem) => [menuItem],
  lunch: (menuItem) => menuItem.tag === "lunch",
  dinner: (menuItem) => menuItem.tag === "dinner",
};

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
