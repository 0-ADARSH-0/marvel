import {
  Box,
  HStack,
  Hide,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
} from "@chakra-ui/react";
import { BsList } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import marvel from "../assets/Marvel_Logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import "./Navbar.css";

const Items: string[] = [
  "stories",
  "comics",
  "characters",
  "movies",
  "series",
  "games",
  "more",
];

const Navbar = () => (
  <Box className="bg-dark shadow">
    <Show above="md">
      <nav
        className="border-bottom justify-content-center w-100"
        style={{ padding: "auto" }}
      >
        <Link to="https://www.marvel.com">
          <Image
            src={marvel}
            width={100}
            alt="Marvel"
            marginX={"auto"}
            opacity={1}
          />
        </Link>
      </nav>
    </Show>
    <nav className="container navbar p-0">
      <HStack className="nav nav-underline m-auto justify-content-evenly w-80">
        <Hide above="md">
          <Menu>
            <MenuButton color={"white"} fontSize={30} children={<BsList />} />
            <MenuList>
              {Items.map((item) => (
                <MenuItem key={item}>
                  <NavLink to={"/marvel/" + item} className="nav-link">
                    {item.toUpperCase()}
                  </NavLink>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Hide>
        <Show above="md">
          {Items.map((item) => (
            <div className=" nav-item px-3 m-0" key={item}>
              <NavLink to={"/marvel/" + item} className="nav-link">
                {item.toUpperCase()}
              </NavLink>
            </div>
          ))}
        </Show>
        <span className="end-0">
          <ColorModeSwitch />
        </span>
      </HStack>
    </nav>
  </Box>
);

export default Navbar;
