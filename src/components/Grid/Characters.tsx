import { Card, SimpleGrid, Image, CardBody } from "@chakra-ui/react";
import { Query } from "../../hooks/useQueries";

interface Props {
  queries: Query[];
}

function Characters({ queries }: Props) {
  return (
    <div className="container">
      <SimpleGrid
        spacing={5}
        columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}
        className="container"
      >
        <p>{queries.length}</p>
        {queries.map((query) => (
          <Card key={query.id} className="bg-black shadow-none">
            <Image
              aspectRatio={3 / 4}
              src={query.thumbnail?.path + "/portrait_incredible.jpg"}
              opacity={1}
            />
            <CardBody fontFamily={"Roboto Condensed"}>{query.name}</CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default Characters;
