import { Grid, GridItem } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "slideshow" "main"`,
        lg: `"nav nav" "slideshow slideshow" "aside main"`,
      }}
    >
      <GridItem area={"nav"} bgColor={"red"}>
        Nav
      </GridItem>
      <GridItem area={"slideshow"} bgColor={"orange"}>
        Slide
      </GridItem>
      <GridItem area={"aside"} bgColor={"blue"}>
        Aside
      </GridItem>
      <GridItem area={"main"} bgColor={"green"}>
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
