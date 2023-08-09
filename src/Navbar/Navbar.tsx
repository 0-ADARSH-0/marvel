import { Box, HStack, Image, Show } from "@chakra-ui/react";
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
      <Box
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
      </Box>
    </Show>
    <Box className="container navbar p-0">
      <HStack className="nav nav-underline m-auto justify-content-evenly w-80">
        <Show below="md">
          <CollapsedNavLinks items={Items} />
        </Show>
        <Show above="md">
          <NavLinks items={Items} />
        </Show>
        <ColorModeSwitch />
      </HStack>
    </Box>
  </Box>
);

export default Navbar;
