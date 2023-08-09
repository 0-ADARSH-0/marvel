import { Box, HStack, Hide, Image, Show } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import marvel from "../assets/Marvel_Logo.svg";
import CollapsedNavLinks from "./CollapsedNavLinks";
import ColorModeSwitch from "./ColorModeSwitch";
import NavLinks from "./NavLinks";
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
          <CollapsedNavLinks items={Items} />
        </Hide>
        <Show above="md">
          <NavLinks items={Items} />
        </Show>
        <span className="ps-lg-5">
          <ColorModeSwitch />
        </span>
      </HStack>
    </nav>
  </Box>
);

export default Navbar;
