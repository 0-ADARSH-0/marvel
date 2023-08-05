import {
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
import useCreators from "../hooks/useCreators";
import useQueryParams from "../store";

const CreatorSelector = () => {
  const { data, hasNextPage, fetchNextPage } = useCreators();
  const setCreators = useQueryParams((s) => s.setCreators);
  const count = data?.pages.reduce((total, page) => total + page.count, 0) || 0;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Creators
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
                {page.results.map((creator) => (
                  <MenuItemOption
                    key={creator.id}
                    value={creator.id.toString()}
                    onClick={() => setCreators([creator.id])}
                  >
                    <Text marginLeft={2}>{creator.fullName}</Text>
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

export default CreatorSelector;
