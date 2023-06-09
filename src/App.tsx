import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import SlideShow from "./components/SlideShow/SlideShow";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "slideshow" "main"`,
        lg: `"nav nav" "slideshow slideshow" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <Navbar
          navItems={[
            "News",
            "Comics",
            "Characters",
            "Movies",
            "TV Shows",
            "Games",
            "Videos",
            "More",
          ]}
        />
      </GridItem>
      <GridItem area={"slideshow"}>
        <SlideShow />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bgColor={"blue"}>
          Aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bgColor={"green"}>
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
