import { Box, HStack, Hide, Icon, Image, Show } from "@chakra-ui/react";
import { BsList } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import marvel from "../assets/Marvel_Logo.svg";
import useQueryParams from "../store";
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

const Navbar = () => {
  const { setqueryParams } = useQueryParams();
  return (
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
                <NavLink
                  to={item}
                  className="nav-link"
                  onClick={() => {
                    setqueryParams({ orderBy: "title" || "name" });
                  }}
                >
                  {item.toUpperCase()}
                </NavLink>
              </div>
            ))}
          </Show>
          <span className=" float-end">
            <ColorModeSwitch />
          </span>
        </HStack>
      </nav>
    </Box>
  );
};

export default Navbar;
