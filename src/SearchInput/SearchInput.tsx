import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

import { useRef } from "react";
import "./SearchInput.css";

interface Props {
  setSearchText: (text: string) => void;
}

function SearchInput({ setSearchText }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onChange={(event) => {
        event.preventDefault();
        if (ref.current && ref.current.value != "")
          setSearchText(ref.current.value);
      }}
    >
      <InputGroup className="container p-5">
        <InputLeftElement className="m-5" children={<BsSearch />} />
        <Input
          className="input ms-2"
          placeholder="Search"
          variant="flushed"
          focusBorderColor="red"
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
