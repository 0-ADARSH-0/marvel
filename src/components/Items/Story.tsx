import { Box, Heading, Tag, Text, Image } from "@chakra-ui/react";
import { Query } from "../../hooks/useQueries";
import imageNotFound from "../../assets/image-not-found.jpg";

interface Props {
  queries: Query[] | undefined;
}

function Story({ queries }: Props) {
  return (
    <Box borderWidth={2} className="shadow-lg p-5">
      {queries?.map((query) => (
        <div key={query.id} className="container">
          <Tag className="mb-3 fw-bold text-danger">
            {query.type.toUpperCase()}
          </Tag>
          <Heading fontFamily={"Roboto Condensed"} fontSize={28}>
            {query.title}
          </Heading>
          <Text className="text-secondary fw-bold">
            Modified: {query.modified.toString().slice(0, 10)}
          </Text>
          <Image
            className="my-5 mx-auto"
            src={
              query.thumbnail
                ? query.thumbnail.path + "/portrait_incredible.jpg"
                : imageNotFound
            }
            opacity={1}
            width={"500px"}
          ></Image>
          <Text>{query.description}</Text>
        </div>
      ))}
    </Box>
  );
}

export default Story;
