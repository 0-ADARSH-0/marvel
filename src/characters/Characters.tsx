import { Box, HStack, Show, SimpleGrid } from "@chakra-ui/react";

import { BsRCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import Pagination from "../Navbar/Pagination";
import SortSelector from "../SearchInput/SortSelector";
import useData from "../hooks/useData";
import CharacterCard from "./CharacterCard";
import CharactersSkel from "./CharactersSkel";
import SearchInput from "../SearchInput/SearchInput";
import useQueryParams from "../store";

function Characters() {
  const { data, error, isLoading } = useData("/characters");
  const setSearch = useQueryParams((s) => s.setNameStartWith);
  return (
    <>
      {error && <p className="alert alert-danger">{error.message}</p>}
      <SearchInput setSearchText={setSearch} />
      <Show above="md">
        <HStack className="container p-4" spacing={10}>
          <SortSelector orders={["name", "modified"]} />
        </HStack>
      </Show>
      {isLoading && <CharactersSkel />}
      <Box className="container">
        {error && (
          <p className="alert alert-danger alert">
            {error.message}
            <Link to="" children={<BsRCircle />} />
          </p>
        )}
        <SimpleGrid
          spacing={5}
          columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}
          padding={"10px"}
        >
          {data?.results.map((query) => (
            <CharacterCard query={query} key={query.id} />
          ))}
        </SimpleGrid>
      </Box>
      <Pagination />
    </>
  );
}

export default Characters;
