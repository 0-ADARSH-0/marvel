import { Box, Heading, Tag, Text, Image } from "@chakra-ui/react";
import { Query } from "../../hooks/useQueries";
import imageNotFound from "../../assets/image-not-found.jpg";

interface Props {
  queries: Query[];
}

function Comic({ queries }: Props) {
  return (
    <Box className="shadow-lg p-5" fontFamily={"Roboto Condensed"}>
      {queries.map((comic) => (
        <div key={comic.id}>
          <Tag className="mb-3 fw-bold text-danger">COMICS</Tag>
          <Heading fontFamily={"Roboto Condensed"}>{comic.title}</Heading>
          <Text>Modified: {comic.modified.toString().slice(0, 10)}</Text>
          <Image
            className="my-lg-5 mx-auto"
            src={
              comic.thumbnail
                ? comic.thumbnail.path + "/detail.jpg"
                : imageNotFound
            }
            opacity={1}
            width={"450px"}
          ></Image>
          {comic.description ? (
            <Heading
              fontSize={20}
              color={"GrayText"}
              fontFamily={"Roboto Condensed"}
            >
              Description
            </Heading>
          ) : (
            <Text></Text>
          )}
          <Text fontSize={20}>{comic.description}</Text>
        </div>
      ))}
    </Box>
  );
}

export default Comic;
