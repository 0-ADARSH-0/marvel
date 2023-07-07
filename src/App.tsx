import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import SlideShow from "./components/SlideShow/SlideShow";
import { useState } from "react";
import Grids from "./components/Grid/Grids";
import useQueries from "./hooks/useQueries";
import Pagination from "./components/Navbar/Pagination";

const App = () => {
  const [endpoint, setEndpoint] = useState("stories");
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");

  const { queriesContainer, isLoading, error } = useQueries(
    endpoint,
    {
      params: {
        orderBy: "-modified",
        limit: 20,
        offset: (page - 1) * 20,
        titleStartsWith: endpoint == "comics" ? searchText || null : null,
        nameStartsWith: endpoint == "characters" ? searchText || null : null,
      },
    },
    [endpoint, page, searchText]
  );

  return (
    <Grid templateAreas={`"nav" "slideshow" "main" "pagination"`}>
      <GridItem position={"fixed"} width={"100%"} zIndex={99} area={"nav"}>
        <Navbar
          onSelect={(endPoint) => {
            setEndpoint(endPoint);
            setPage(1);
          }}
        />
      </GridItem>
      <GridItem area={"slideshow"} marginTop={"66px"} paddingY={15}>
        <SlideShow field={endpoint[0].toUpperCase() + endpoint.slice(1)} />
      </GridItem>
      <GridItem area={"main"}>
        <Grids
          endPoint={endpoint}
          queries={queriesContainer?.results}
          isLoading={isLoading}
          error={error}
          onPass={(path) => {
            setEndpoint(path);
            setPage(1);
          }}
          onSearch={(s) => {
            setSearchText(s);
            setPage(1);
          }}
        />
      </GridItem>
      <GridItem area={"pagination"}>
        <Pagination
          total={
            queriesContainer ? Math.floor(queriesContainer.total / 20) + 1 : 0
          }
          current={page}
          onSelect={(current) => setPage(current)}
        />
      </GridItem>
    </Grid>
  );
};

export default App;
