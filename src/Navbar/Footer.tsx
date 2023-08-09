import { Box, ListItem, Text, UnorderedList, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import marvel from "../assets/marvel-footer.png";

const Footer = () => {
  return (
    <Box className="bg-dark shadow bottom-0" height={200} textAlign={"center"}>
      <Image width={200} src={marvel} margin={"auto"} paddingY={8}></Image>
      <Text marginX={"auto"} color={"whiteAlpha.800"}>
        Data provided by Marvel. © 2023 MARVEL
      </Text>
      <UnorderedList
        width={{ sm: "80%", md: "50%", lg: "30%" }}
        color={"whiteAlpha.700"}
        className=" d-flex m-auto justify-content-evenly"
        fontSize={"12px"}
      >
        <ListItem>
          <Link to={""}>Terms of Use</Link>
        </ListItem>
        <ListItem>
          <Link to={""}>Privacy Policy</Link>
        </ListItem>
        <ListItem>
          <Link to={""}>License Agreement</Link>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default Footer;
