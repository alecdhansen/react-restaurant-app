import { NavItem } from "react-bootstrap";
import MenuItem from "./MenuItem";

function MenuList({ menuItems, ...props }) {
  return (
    <>
      <MenuItem
        menuItems={menuItems}
        addOrder={props.addOrder}
        // key={item.id}
        // menuItem={menuItem}
      />
    </>
  );
}
export default MenuList;
