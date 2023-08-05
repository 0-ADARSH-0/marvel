import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useQueryParams from "../store";

interface Props {
  orders: string[];
}

const SortSelector = ({ orders }: Props) => {
  const setSortOrder = useQueryParams((s) => s.setOrder);
  const sortOrder = useQueryParams((s) => s.queryParams.orderBy);
  return (
    <Menu closeOnSelect={false}>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By
      </MenuButton>
      <MenuList minWidth="240px">
        <MenuOptionGroup defaultValue="-" title="Order" type="radio">
          <MenuItemOption
            value=""
            onClick={() => {
              if (sortOrder[0] == "-") setSortOrder(sortOrder.slice(1));
            }}
          >
            Ascending
          </MenuItemOption>
          <MenuItemOption
            value="-"
            onClick={() => {
              if (sortOrder[0] != "-") setSortOrder("-" + sortOrder);
            }}
          >
            Descending
          </MenuItemOption>
        </MenuOptionGroup>
        <MenuDivider />
        <MenuOptionGroup defaultValue="modified" title="Sort By" type="radio">
          {orders.map((order, index) => (
            <MenuItemOption
              key={index}
              value={order}
              onClick={() => {
                if (sortOrder[0] == "-") setSortOrder("-" + order);
                else setSortOrder(order);
              }}
            >
              {order.toUpperCase()}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
