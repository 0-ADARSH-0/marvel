import { HStack, Hide, Icon, Image, Show } from "@chakra-ui/react";
import { BsList } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import marvel from "../assets/Marvel_Logo.svg";
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

const Navbar = () => {
  return (
    <div className="bg-dark">
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
              className="mx-auto opacity-75"
            />
          </Link>
        </nav>
      </Show>
      <nav className="container navbar p-0">
        <HStack className="nav nav-underline m-auto justify-content-evenly w-80">
          <Hide above="md">
            <Icon
              color={"white"}
              fontSize={25}
              height="40px"
              fontWeight={"bold"}
              children={<BsList />}
              float={"left"}
              marginLeft={5}
            />
          </Hide>
          <Show above="md">
            {Items.map((item) => (
              <div className=" nav-item px-3 m-0" key={item}>
                <NavLink to={item} className="nav-link">
                  {item.toUpperCase()}
                </NavLink>
              </div>
            ))}
          </Show>
        </HStack>
      </nav>
    </div>
  );
};

export default Navbar;
