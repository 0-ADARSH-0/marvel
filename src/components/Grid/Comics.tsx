import {
  Card,
  SimpleGrid,
  Image,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { Query } from "../../hooks/useQueries";
import imageNotFound from "../../assets/image-not-found.jpg";

import "./Comics.css";

interface Props {
  queries: Query[] | undefined;
  onSelect: (path: string) => void;
}

function Comics({ queries, onSelect }: Props) {
  return (
    <div className="container">
      <SimpleGrid
        spacing={5}
        columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}
        className="container"
      >
        {queries?.map((query) => (
          <Card
            className="comic-card"
            key={query.id}
            backgroundColor={"white"}
            shadow={"none"}
          >
            <Image
              className="image"
              aspectRatio={3 / 4}
              src={
                query.thumbnail
                  ? query.thumbnail.path + "/portrait_incredible.jpg"
                  : imageNotFound
              }
              opacity={1}
              cursor={"pointer"}
              onClick={() => onSelect(query.resourceURI.slice(36))}
            />
            <CardBody
              className="comic-title"
              paddingX={0}
              paddingBottom={1}
              fontFamily={"Roboto Condensed"}
              cursor={"pointer"}
              onClick={() => onSelect(query.resourceURI.slice(36))}
            >
              {query.title}
            </CardBody>
            <CardFooter
              color={"gray.600"}
              padding={0}
              fontSize={12}
              fontFamily={"Helvetica"}
              cursor={"pointer"}
            >
              {query.creators?.items.slice(0, 2).map((creator) => (
                <p
                  key={creator.name}
                  className="comic-creator overflow-hidden me-2"
                  onClick={() => onSelect(creator.resourceURI.slice(36))}
                >
                  {creator.name}
                </p>
              ))}
              {query.creators?.items.length > 3 && <p>etc</p>}
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default Comics;
