import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Footer from "./Navbar/Footer";
import Navbar from "./Navbar/Navbar";

const MarvelHomePage = () => {
  return (
    <Grid templateAreas={`"nav" "searchbar" "main" "pagination" "footer"`}>
      <GridItem position={"fixed"} width={"100%"} zIndex={99} area={"nav"}>
        <Navbar />
      </GridItem>
      <GridItem area={"searchbar"} marginTop={"66px"} paddingY={15}>
        {/* <SlideShow field={endpoint[0].toUpperCase() + endpoint.slice(1)} /> */}
      </GridItem>
      <GridItem area={"main"}>
        <Outlet />
      </GridItem>
      <GridItem area={"footer"} width={"100%"}>
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default MarvelHomePage;
