import { Alert, AlertIcon } from "@chakra-ui/react";
import useQueries, { Query } from "../../hooks/useQueries";
import SearchInput from "../SearchInput/SearchInput";
import News from "./News";
import Comics from "./Comics";
import Characters from "./Characters";
import Story from "../Items/Story";
import NewsSkel from "./Skeletons/Grids/NewsSkel";
import Comic from "../Items/Comic";

interface Props {
  field: { value: string; label: string };
  onSelect: (field: { value: string; label: string }) => void;
}

function Grids({ field, onSelect }: Props) {
  const { queries, isLoading, error } = useQueries(field.value, {
    params: { orderBy: "-modified" },
  });

  return (
    <div className="container">
      <SearchInput />
      {error && (
        <Alert status="error">
          <AlertIcon />
          {error.toUpperCase()}
        </Alert>
      )}
      {field.label == "News" &&
        (isLoading ? (
          <NewsSkel />
        ) : (
          <News
            queries={queries}
            onChoose={(id) =>
              onSelect({
                value: field.value + "/" + id.toString(),
                label: "Story",
              })
            }
          />
        ))}
      {field.label == "Comics" && (
        <Comics
          onChooseComic={(id) =>
            onSelect({
              value: field.value + "/" + id.toString(),
              label: "Comic",
            })
          }
          queries={queries}
        />
      )}
      {field.label == "Characters" && <Characters queries={queries} />}
      {field.label == "Story" && <Story queries={queries} />}
      {field.label == "Comic" && <Comic queries={queries} />}
    </div>
  );
}

export default Grids;
