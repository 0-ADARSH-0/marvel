import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { BsList, BsX } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import marvel from "../assets/Marvel_Logo.svg";

interface Props {
  items: string[];
}

const CollapsedNavLinks = ({ items }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Icon
        onClick={onOpen}
        color={"white"}
        fontSize={20}
        children={isOpen ? <BsX /> : <BsList />}
      />
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <Link to="https://www.marvel.com">
              <Image
                src={marvel}
                width={100}
                alt="Marvel"
                marginX={"auto"}
                opacity={1}
              />
            </Link>
          </DrawerHeader>
          <DrawerBody className="nav-underline">
            {items.map((item) => (
              <div className=" nav-item px-3 m-0" key={item}>
                <NavLink
                  to={"/marvel/" + item}
                  className="nav-link w-100 p-2"
                  onClick={onClose}
                >
                  {item.toUpperCase()}
                </NavLink>
              </div>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CollapsedNavLinks;
