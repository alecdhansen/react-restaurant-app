import { NavItem } from "react-bootstrap";
import MenuItem from "./MenuItem";

function MenuList({ menuItems, ...props }) {
  return (
    <>
      <MenuItem menuItems={menuItems} addOrder={props.addOrder} />
    </>
  );
}
export default MenuList;
