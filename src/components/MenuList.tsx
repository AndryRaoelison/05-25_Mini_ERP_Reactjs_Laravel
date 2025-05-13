import { Link } from "react-router-dom";

type Props = {
  menuTitle: string;
  menuItems: {
    id: number;
    icon: string;
    label: string;
    link: string;
  }[];
};

const MenuList = ({ menuTitle, menuItems }: Props) => {
  return (
    <div className="mb-2 ">
      <h4 className="text-soft-color font-semibold">{menuTitle}</h4>
      {menuItems.map(({ id, icon, label, link }) => (
        <Link
          to={link}
          key={id}
          className="flex items-center gap-2 cursor-pointer my-1 mx-0 rounded-sm px-2 py-1 hover:bg-soft-bg">
          <img src={icon} alt={`${label}-icon`} className="h-[20px] mx-0" />
          <span className="mx-0 block">{label}</span>
        </Link>
      ))}
    </div>
  );
};

export default MenuList;
