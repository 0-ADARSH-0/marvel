import { NavLink } from "react-router-dom";

interface Props {
  items: string[];
}

const NavLinks = ({ items }: Props) => {
  return (
    <>
      {items.map((item) => (
        <div className=" nav-item px-3 m-0" key={item}>
          <NavLink to={"/marvel/" + item} className="nav-link">
            {item.toUpperCase()}
          </NavLink>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
