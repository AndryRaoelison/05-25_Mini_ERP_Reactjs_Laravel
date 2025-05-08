import { menuDatas } from "../constant"
import MenuList from "./MenuList"

const Menu = () => {
  return (
    <div className="p-[20px] h-[80vh] ">
      {menuDatas.map(({ id, menuTitle, menuItems }) => 
      <MenuList  key={id} menuTitle={menuTitle} menuItems={menuItems}   />)}
    </div>
  )
}

export default Menu