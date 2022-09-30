import Checkout from "./Checkout";
import MenuItem from "./MenuItem";
import menu from "./menu";

function MenuList() {
  return (
    <div className="menu-page">
      <ul>
        <MenuItem />
      </ul>
      <div>
        <Checkout />
        {/* {menu} */}
      </div>
    </div>
  );
}

export default MenuList;
