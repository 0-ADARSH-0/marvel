import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import SlideShow from "./components/SlideShow/SlideShow";
import { useState } from "react";
import Grids from "./components/Grid/Grids";

const navItems = [
  { value: "stories", label: "News" },
  { value: "comics", label: "Comics" },
  { value: "characters", label: "Characters" },
  { value: "movies", label: "Movies" },
  { value: "games", label: "Games" },
  { value: "series", label: "TV Shows" },
  { value: "events", label: "Videos" },
  { value: "", label: "More" },
];

const App = () => {
  const [field, setField] = useState({ value: "stories", label: "News" });

  return (
    <Grid templateAreas={`"nav" "slideshow" "main"`} bgColor={"white"}>
      <GridItem position={"fixed"} width={"100%"} zIndex={99} area={"nav"}>
        <Navbar Items={navItems} onSelect={(field) => setField(field)} />
      </GridItem>
      <GridItem area={"slideshow"} marginTop={"66px"} paddingY={15}>
        <SlideShow field={field.label} />
      </GridItem>
      <GridItem area={"main"}>
        <Grids onSelect={(field) => setField(field)} field={field} />
      </GridItem>
    </Grid>
  );
};

export default App;
