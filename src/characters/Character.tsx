import { Box, Heading, Tag, Text, Image } from "@chakra-ui/react";
import useData from "../hooks/useData";
import { Link, useParams } from "react-router-dom";
import imageNotFound from "../assets/image-not-found.jpg";
import ComicCard from "../comics/ComicCard";

const Character = () => {
  const { id } = useParams();
  const { data } = useData(`/characters/${id}`);
  const character = data?.results[0];
  const { data: comics } = useData("/comics");
  return (
    <>
      <Box
        className="container p-5 my-lg-5 shadow-lg"
        fontFamily={"Roboto Condensed"}
      >
        <Tag className="mb-3 fw-bold text-danger">CHARACTER</Tag>
        <Heading fontFamily={"Roboto Condensed"}>{character?.name}</Heading>
        <Text>Modified: {character?.modified.toString().slice(0, 10)}</Text>
        <Link to={character?.urls[0].url || ""}>
          <Image
            className="my-lg-5 mx-auto thumbnail"
            src={
              character?.thumbnail
                ? character?.thumbnail.path + "/detail.jpg"
                : imageNotFound
            }
            opacity={1}
            width={"450px"}
          ></Image>
        </Link>

        {character?.description ? (
          <Box marginBottom={100}>
            <hr />
            <Heading
              fontSize={20}
              color={"GrayText"}
              fontFamily={"Roboto Condensed"}
              marginY={50}
            >
              DESCRIPTION
            </Heading>
            <Text fontSize={20}>{character?.description}</Text>
          </Box>
        ) : null}
        {character?.comics ? (
          <Box>
            <hr />
            <Heading
              fontSize={20}
              color={"GrayText"}
              fontFamily={"Roboto Condensed"}
              marginY={50}
            >
              APPEARANCES
            </Heading>
            <Box className="d-flex overflow-auto p-2">
              {comics?.results.map((comic) => (
                <Box className="me-5 w-100" minWidth={200} key={comic.id}>
                  <ComicCard query={comic} />
                </Box>
              ))}
            </Box>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Character;
