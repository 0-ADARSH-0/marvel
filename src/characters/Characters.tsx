import { SimpleGrid } from "@chakra-ui/react";

import { BsRCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import useData from "../hooks/useData";
import CharacterCard from "./CharacterCard";
import CharactersSkel from "./CharactersSkel";
import SearchInput from "../SearchInput/SearchInput";
import Pagination from "../Navbar/Pagination";
import useQueryParams from "../store";

function Characters() {
  const { data, error, isLoading } = useData("/characters");
  const { setNameStartWith } = useQueryParams();
  return (
    <>
      {error && <p className="alert alert-danger">{error.message}</p>}
      <SearchInput setSearchText={setNameStartWith} />
      {isLoading && <CharactersSkel />}
      <div className="container">
        {error && (
          <p className="alert alert-danger alert">
            {error.message}
            <Link to="" children={<BsRCircle />} />
          </p>
        )}
        <SimpleGrid
          spacing={5}
          columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}
          className="container m-auto"
        >
          {data?.results.map((query) => (
            <Link key={query.id} to={query.id.toString()}>
              <CharacterCard query={query} />
            </Link>
          ))}
        </SimpleGrid>
      </div>
      <Pagination />
    </>
  );
}

export default Characters;