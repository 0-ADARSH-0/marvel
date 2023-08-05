import { Box, Heading, Spinner, Tag } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ComicCard from "../comics/ComicCard";
import useData from "../hooks/useData";

const Creator = () => {
  const { id } = useParams();
  const { data } = useData(`/creators/${id}`);
  const creator = data?.results[0];
  const { data: comics, isLoading: areComicsLoading } = useData(
    `/creators/${id}/comics`
  );
  if (!creator) return null;
  return (
    <>
      <Box
        className="shadow-lg p-5 my-lg-5 container"
        fontFamily={"Roboto Condensed"}
      >
        <Tag className="mb-3 fw-bold text-danger">CREATOR</Tag>
        <Heading fontFamily={"Roboto Condensed"}>{creator.fullName}</Heading>
        <Heading
          fontSize={20}
          color={"GrayText"}
          fontFamily={"Roboto Condensed"}
          marginY={50}
        >
          COMICS
        </Heading>
        {areComicsLoading && <Spinner />}
        <Box className="overflow-auto d-flex p-2">
          {comics?.results.map((comic) => (
            <Box key={comic.id} className="me-5" minWidth={200}>
              <ComicCard query={comic} />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Creator;
