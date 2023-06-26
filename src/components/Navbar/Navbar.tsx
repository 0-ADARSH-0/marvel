import { Show } from "@chakra-ui/react";
import "./Navbar.css";

interface NavItems {
  Items: {
    value: string;
    label: string;
  }[];
  onSelect: (field: { value: string; label: string }) => void;
}

const Navbar = ({ Items, onSelect }: NavItems) => {
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
            {Items.map((item) => (
              <li className="nav-item" key={item.value}>
                <a href="#" className="nav-link" onClick={() => onSelect(item)}>
                  {item.label}
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
