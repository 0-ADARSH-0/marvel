import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

import "./SearchInput.css";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

function SearchInput({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onChange={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
        console.log(1);
      }}
    >
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
          ref={ref}
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
