import {
  Card,
  SimpleGrid,
  Image,
  CardBody,
  Link,
  Text,
  Box,
} from "@chakra-ui/react";
import { Query } from "../../hooks/useQueries";

import "./Characters.css";

interface Props {
  queries: Query[] | undefined;
  onSelect: (path: string) => void;
}

function Characters({ queries, onSelect }: Props) {
  return (
    <div className="container">
      <SimpleGrid
        spacing={5}
        columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}
        className="container"
      >
        {queries?.map((query) => (
          <Link
            key={query.id}
            onClick={() => onSelect(query.resourceURI.slice(36))}
          >
            <Card className="bg-black shadow-none " height={500}>
              <Image
                aspectRatio={3 / 4}
                src={query.thumbnail?.path + "/portrait_incredible.jpg"}
                opacity={1}
              />

              <CardBody
                fontFamily={"Roboto Condensed"}
                onClick={() => onSelect(query.resourceURI.slice(36))}
                color={"white"}
                padding={0}
              >
                <Box height={2} backgroundColor={"rgb(155, 4, 4)"}></Box>
                <Text margin={5}>{query.name}</Text>
              </CardBody>
            </Card>
          </Link>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default Characters;
