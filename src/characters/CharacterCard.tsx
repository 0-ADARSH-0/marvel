import { Card, CardBody, Image, Box, Text } from "@chakra-ui/react";
import { Query } from "../entities/interfaces";
import imageNotFound from "../assets/image-not-found.jpg";

import "./CharacterCard.css";

interface Props {
  query: Query;
}

const CharacterCard = ({ query }: Props) => {
  return (
    <Card className="bg-black shadow-none overflow-hidden mx-auto" height={500}>
      <Box overflow="hidden" width="full">
        <Image
          aspectRatio={3 / 4}
          src={query.thumbnail?.path + "/portrait_incredible.jpg"}
          alt={imageNotFound}
          opacity={1}
          margin={0}
          width="full"
        />
      </Box>

      <CardBody
        fontFamily={"Roboto Condensed"}
        color={"white"}
        padding={0}
        float={"initial"}
        position={"relative"}
      >
        <Box
          className="bar"
          backgroundColor={"rgb(155, 4, 4)"}
          height={2}
          width={"100%"}
          position={"absolute"}
          top={0}
        ></Box>
        <Text margin={5} position={"absolute"} top={0}>
          {query.name}
        </Text>
      </CardBody>
    </Card>
  );
};

export default CharacterCard;
