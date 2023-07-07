import { Show, HStack, Image, Icon, Hide } from "@chakra-ui/react";
import "./Navbar.css";
import marvel from "../../assets/Marvel_Logo.svg";
import { BsList } from "react-icons/bs";

interface NavItems {
  onSelect: (field: string) => void;
}

const Items: string[] = [
  "stories",
  "comics",
  "characters",
  "movies",
  "series",
  "games",
  "more",
];

const Navbar = ({ onSelect }: NavItems) => {
  return (
    <div className="bg-dark">
      <Show above="md">
        <nav
          className="border-bottom justify-content-center w-100"
          style={{ padding: "auto" }}
        >
          <a href="">
            <Image
              src={marvel}
              width={100}
              alt="Marvel"
              className="mx-auto opacity-75"
            />
          </a>
        </nav>
      </Show>
      <nav className="container navbar p-0">
        <HStack className="nav nav-underline m-auto justify-content-evenly w-80">
          <Hide above="md">
            <Icon
              color={"white"}
              fontSize={25}
              height="40px"
              fontWeight={"bold"}
              children={<BsList />}
              float={"left"}
              marginLeft={5}
            />
          </Hide>
          <Show above="md">
            {Items.map((item) => (
              <div className=" nav-item px-3 m-0" key={item}>
                <a className="nav-link" onClick={() => onSelect(item)}>
                  {item.toUpperCase()}
                </a>
              </div>
            ))}
          </Show>
        </HStack>
      </nav>
    </div>
  );
};

export default Navbar;
