import { Box } from "@chakra-ui/react";
import { QueryContainer } from "../entities/interfaces";
import ComicCard from "./ComicCard";

interface Props {
  relatedComics: QueryContainer | undefined;
}

const RelatedComics = ({ relatedComics }: Props) => {
  return (
    <Box className=" overflow-auto d-flex p-2">
      {relatedComics?.results.map((comic) => (
        <Box key={comic.id} marginEnd={10}>
          <ComicCard query={comic} />
        </Box>
      ))}
    </Box>
  );
};

export default RelatedComics;
