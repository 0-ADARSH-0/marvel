import { Grid, GridItem } from "@chakra-ui/react";
import Grids from "./Grids";
import Navbar from "./Navbar/Navbar";

const App = () => {
  return (
    <Grid templateAreas={`"nav" "slideshow" "main" "pagination"`}>
      <GridItem position={"fixed"} width={"100%"} zIndex={99} area={"nav"}>
        <Navbar />
      </GridItem>
      <GridItem area={"slideshow"} marginTop={"66px"} paddingY={15}>
        {/* <SlideShow field={endpoint[0].toUpperCase() + endpoint.slice(1)} /> */}
      </GridItem>
      <GridItem area={"main"}>
        <Grids />
      </GridItem>
    </Grid>
  );
};

export default App;
