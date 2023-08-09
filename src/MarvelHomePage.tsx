import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Navbar/Footer";
import Navbar from "./Navbar/Navbar";
import SearchInput from "./SearchInput/SearchInput";
import useQueryParams from "./store";

const MarvelHomePage = () => {
  const { pathname } = useLocation();
  const setSearchText = useQueryParams((s) =>
    pathname.includes("comics") ? s.setTitleStartWith : s.setNameStartWith
  );
  return (
    <Grid templateAreas={`"nav" "searchbar" "main" "pagination" "footer"`}>
      <GridItem position={"fixed"} width={"100%"} zIndex={99} area={"nav"}>
        <Navbar />
      </GridItem>
      <GridItem area={"searchbar"} marginTop={"66px"} paddingY={15}>
        <SearchInput setSearchText={setSearchText} />
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
