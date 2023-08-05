import { HStack, SimpleGrid } from "@chakra-ui/react";

import Pagination from "../Navbar/Pagination";
import CharacterSelector from "../SearchInput/CharacterSelector";
import SearchInput from "../SearchInput/SearchInput";
import SortSelector from "../SearchInput/SortSelector";
import useData from "../hooks/useData";
import useQueryParams from "../store";
import ComicCard from "./ComicCard";
import ComicsSkel from "./ComicsSkel";
import CreatorSelector from "../SearchInput/CreatorSelector";

function Comics() {
  const { data: queries, error, isLoading } = useData("/comics");
  const { setTitleStartWith } = useQueryParams();
  return (
    <>
      {error && <p className="alert alert-danger">{error.message}</p>}
      <SearchInput setSearchText={setTitleStartWith} />
      <HStack className="container p-4" spacing={10}>
        <SortSelector orders={["title", "modified", "onsaleDate"]} />
        <CharacterSelector />
        <CreatorSelector />
      </HStack>
      {isLoading && <ComicsSkel />}
      <div className="container my-5">
        <SimpleGrid
          spacing={{ xs: 0, sm: 1, md: 5 }}
          columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}
          className="m-auto"
        >
          {queries?.results.map((query) => (
            <ComicCard key={query.id} query={query} />
          ))}
        </SimpleGrid>
      </div>
      <Pagination />
    </>
  );
}

export default Comics;
