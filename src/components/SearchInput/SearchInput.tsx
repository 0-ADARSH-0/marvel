import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

import "./SearchInput.css";

function SearchInput() {
  return (
    <InputGroup className="container p-5 text-dark">
      <InputLeftElement className="m-5" children={<BsSearch />} />
      <Input
        className="input ms-2"
        placeholder="Search"
        variant="flushed"
        focusBorderColor="black"
        borderBottom={"2px"}
        fontFamily={"Roboto Condensed"}
        fontSize={20}
      />
    </InputGroup>
  );
}

export default SearchInput;
