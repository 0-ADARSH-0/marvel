import { Text, Icon } from "@chakra-ui/react";
import SearchInput from "../SearchInput/SearchInput";
import { BsWifiOff, BsX } from "react-icons/bs";
import NewsSkel from "./Skeletons/Grids/NewsSkel";
import { Query } from "../../hooks/useQueries";
import Comics from "./Comics";
import News from "./News";
import Characters from "./Characters";
import ComicsSkel from "./Skeletons/Grids/ComicsSkel";
import CharactersSkel from "./Skeletons/Grids/CharactersSkel";
import Comic from "../Items/Comic";
import Story from "../Items/Story";

interface Props {
  endPoint: string;
  queries: Query[] | undefined;
  isLoading: boolean;
  error: string;
  onPass: (path: string) => void;
  onSearch: (searchText: string) => void;
}

function Grids({
  endPoint,
  queries,
  isLoading,
  error,
  onPass,
  onSearch,
}: Props) {
  const components = [
    {
      endpoint: "stories/",
      component: <Story queries={queries} />,
      skeleton: <i />,
    },
    {
      endpoint: "comics/",
      component: <Comic queries={queries} onSelect={(path) => onPass(path)} />,
      skeleton: <i />,
    },
    {
      endpoint: "characters/",
      component: (
        <Characters queries={queries} onSelect={(id) => console.log(id)} />
      ),
      skeleton: <i />,
    },
    {
      endpoint: "stories",
      component: (
        <News
          queries={queries}
          onSelect={(id) => onPass(endPoint + "/" + id)}
        />
      ),
      skeleton: <NewsSkel />,
    },
    {
      endpoint: "comics",
      component: <Comics queries={queries} onSelect={(path) => onPass(path)} />,
      skeleton: <ComicsSkel />,
    },
    {
      endpoint: "characters",
      component: (
        <Characters queries={queries} onSelect={(path) => onPass(path)} />
      ),
      skeleton: <CharactersSkel />,
    },
  ];

  const currentComponent = components.find(
    (e) => !endPoint.includes(e.endpoint + "/") && endPoint.includes(e.endpoint)
  );
  error = queries ? "" : error;

  return (
    <div className="container">
      <SearchInput onSearch={(s) => onSearch(s)} />
      {error && (
        <div className="text-center bg-white">
          <Icon
            children={
              (error == "Network Error" && <BsWifiOff />) ||
              (error == "canceled" && <BsX />)
            }
            color={"red"}
            fontSize={25}
          />
          <Text fontSize={20} fontWeight={600} fontFamily={"Roboto Condensed"}>
            {error}
          </Text>
        </div>
      )}
      {isLoading ? currentComponent?.skeleton : currentComponent?.component}
    </div>
  );
}

export default Grids;
