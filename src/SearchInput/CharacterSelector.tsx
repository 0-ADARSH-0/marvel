import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import InfiniteScroll from "react-infinite-scroll-component";
import useCharacters from "../hooks/useCharacters";
import useQueryParams from "../store";

const CharacterSelector = () => {
  const { data, fetchNextPage, hasNextPage } = useCharacters();
  const count = data?.pages.reduce((total, page) => total + page.count, 0) || 0;
  const { setCharacters } = useQueryParams();
  return (
    <Menu closeOnSelect={false}>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Characters
      </MenuButton>
      <MenuList minWidth="240px" maxHeight={400} overflow={"auto"}>
        <InfiniteScroll
          dataLength={count}
          hasMore={!!hasNextPage}
          next={() => fetchNextPage()}
          loader={<Spinner color="red" />}
        >
          <MenuOptionGroup type="radio">
            {data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.results.map((character) => (
                  <MenuItemOption
                    key={character.id}
                    value={character.id.toString()}
                    onClick={() => setCharacters([character.id])}
                  >
                    <Avatar
                      size={"md"}
                      name={character.name}
                      src={character.thumbnail.path + "/standard_small.jpg"}
                      float={"left"}
                      padding={2}
                    />
                    <Text marginLeft={2}>{character.name}</Text>
                  </MenuItemOption>
                ))}
              </React.Fragment>
            ))}
          </MenuOptionGroup>
        </InfiniteScroll>
      </MenuList>
    </Menu>
  );
};

export default CharacterSelector;
