import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Footer from "./Navbar/Footer";
import Navbar from "./Navbar/Navbar";

const MarvelHomePage = () => {
  return (
    <Grid templateAreas={`"nav" "main" "pagination" "footer"`}>
      <GridItem position={"fixed"} width={"100%"} zIndex={99} area={"nav"}>
        <Navbar />
      </GridItem>
      <GridItem area={"main"}>
        <Outlet />
      </GridItem>
      <GridItem area={"footer"} width={"100%"} paddingY={10}>
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default MarvelHomePage;
