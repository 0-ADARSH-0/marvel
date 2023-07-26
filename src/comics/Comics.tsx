import { SimpleGrid } from "@chakra-ui/react";

import useData from "../hooks/useData";
import ComicCard from "./ComicCard";
import ComicsSkel from "./ComicsSkel";
import SearchInput from "../SearchInput/SearchInput";
import Pagination from "../Navbar/Pagination";
import useQueryParams from "../store";

function Comics() {
  const { data: queries, error, isLoading } = useData("/comics");
  const { setTitleStartWith } = useQueryParams();
  return (
    <>
      {error && <p className="alert alert-danger">{error.message}</p>}
      <SearchInput setSearchText={setTitleStartWith} />
      {isLoading && <ComicsSkel />}
      <div className="container">
        <SimpleGrid
          spacing={5}
          columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}
          className="container m-auto"
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
