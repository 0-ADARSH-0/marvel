import { Show } from "@chakra-ui/react";
import "./Navbar.css";
interface Props {
  navItems: string[];
}

const Navbar = ({ navItems }: Props) => {
  return (
    <div className="bg-dark">
      <nav className="container">
        <i className="bi-list" />
        <img src="" alt="Marvel" />
      </nav>
      <hr color="white" className="m-0" />
      <Show above="md">
        <nav className="navbar p-0">
          <ul className="nav nav-underline">
            {navItems.map((item) => (
              <li className="nav-item" key={item}>
                <a href="" className="nav-link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Show>
    </div>
  );
};

export default Navbar;
