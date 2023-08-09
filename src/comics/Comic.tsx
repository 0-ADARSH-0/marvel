import {
  Avatar,
  Box,
  Heading,
  Image,
  Show,
  SimpleGrid,
  Spinner,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import imageNotFound from "../assets/image-not-found.jpg";
import useData from "../hooks/useData";
import "./Comic.css";
import RelatedComics from "./RelatedComics";

function Comic() {
  const { id } = useParams();
  const { data } = useData(`/comics/${id}`);
  const comic = data?.results[0];
  const { data: characters, isLoading: areCharactersLoading } = useData(
    `/comics/${id}/characters`
  );
  const { data: similarComics, isLoading: areSimilarComicsLoading } = useData(
    "/comics",
    {
      titleStartsWith: comic?.title.split(":" || "(" || "#" || ".")[0],
      orderBy: "title",
    }
  );

  return (
    <>
      <Box
        className="shadow-lg p-5 my-lg-5 container"
        fontFamily={"Roboto Condensed"}
      >
        <Tag className="mb-3 fw-bold text-danger">COMIC</Tag>
        <Heading fontFamily={"Roboto Condensed"}>{comic?.title}</Heading>
        <Text>Modified: {comic?.modified.toString().slice(0, 10)}</Text>
        <Link to={comic?.urls[0].url || ""}>
          <Image
            className="my-lg-5 mx-auto thumbnail"
            src={
              comic?.thumbnail
                ? comic?.thumbnail.path + "/detail.jpg"
                : imageNotFound
            }
            opacity={1}
            height={{ sm: "100px", md: "200px", lg: "550px" }}
          ></Image>
        </Link>
        <TableContainer marginBottom={100}>
          <Table
            variant={"simple"}
            size={"sm"}
            width={"500px"}
            marginX={"auto"}
          >
            <Tbody>
              {comic?.dates.map((date) => (
                <Tr key={date.type}>
                  <Td>{date.type.toUpperCase()}</Td>
                  <Td>{date.date.toString().slice(0, 10)}</Td>
                </Tr>
              ))}
              {comic?.prices?.map((price) => (
                <Tr key={price.type}>
                  <Td>{price.type.toUpperCase()}</Td>
                  <Td>{price.price ? "$" + price.price : "NA"}</Td>
                </Tr>
              ))}
              <Tr>
                <Td>Format</Td>
                <Td>{comic?.format ? comic?.format : "NA"}</Td>
              </Tr>
              <Tr>
                <Td>Pages</Td>
                <Td>{comic?.pageCount == 0 ? "NA" : comic?.pageCount}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        {comic?.description ? (
          <Box marginBottom={100}>
            <hr />
            <Heading
              color={"GrayText"}
              fontFamily={"Roboto Condensed"}
              marginY={50}
            >
              DESCRIPTION
            </Heading>
            <Text fontSize={20}>{comic?.description}</Text>
          </Box>
        ) : null}

        {comic?.images.length ? (
          <Box marginBottom={100}>
            <hr />
            <Heading
              color={"GrayText"}
              fontFamily={"Roboto Condensed"}
              marginY={50}
            >
              PREVIEW
            </Heading>
            <SimpleGrid
              columns={{ lg: 4, md: 2, sm: 1 }}
              spacing={5}
              margin={"auto"}
            >
              {comic.images.map((image, index) => (
                <Image
                  _hover={{
                    transform: "scale(1.02)",
                    transition: "transform 100ms ease-in",
                  }}
                  key={index}
                  src={image.path + "/portrait_uncanny.jpg"}
                  margin={"auto"}
                  opacity={1}
                />
              ))}
            </SimpleGrid>
          </Box>
        ) : null}

        {comic?.characters.items.length != 0 ? (
          <Box marginBottom={100}>
            <hr />
            <Heading
              color={"GrayText"}
              fontFamily={"Roboto Condensed"}
              marginY={50}
            >
              CHARACTERS
            </Heading>
            {areCharactersLoading && <Spinner />}
            <TableContainer>
              <Table width={"600px"} margin={"auto"}>
                <Tbody className="characters overflow-hidden">
                  {characters?.results.map((character, index) => (
                    <Tr key={index}>
                      <Td fontSize={20} valign={"middle"}>
                        <Link to={"/marvel" + character.resourceURI.slice(35)}>
                          {character.name.toUpperCase()}
                        </Link>
                      </Td>
                      <Td>
                        <Link to={"/marvel" + character.resourceURI.slice(35)}>
                          <Avatar
                            name={character.name}
                            src={
                              character.thumbnail.path + "/standard_xlarge.jpg"
                            }
                            size="2xl"
                          />
                        </Link>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        ) : null}
      </Box>
      {similarComics?.results.length != 0 && (
        <Show above="md">
          <Box className="container">
            <Heading
              color={"GrayText"}
              fontFamily={"Roboto Condensed"}
              marginY={50}
            >
              RECOMMENDED
            </Heading>
            {areSimilarComicsLoading && <Spinner />}
            <RelatedComics relatedComics={similarComics} />
          </Box>
        </Show>
      )}
    </>
  );
}

export default Comic;
