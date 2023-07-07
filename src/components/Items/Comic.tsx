import {
  Box,
  Heading,
  Tag,
  Text,
  Image,
  TableContainer,
  Table,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";
import "./Comic.css";
import useQueries, { Query } from "../../hooks/useQueries";
import imageNotFound from "../../assets/image-not-found.jpg";
import { useState } from "react";

interface Props {
  queries: Query[] | undefined;
  onSelect: (endpoint: string) => void;
}

function Comic({ queries, onSelect }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const comic = queries ? queries[0] : null;
  var characters = useQueries("comics/" + comic?.id + "/characters")
    .queriesContainer?.results;
  return (
    <Box className="shadow-lg p-5 mb-lg-5" fontFamily={"Roboto Condensed"}>
      <Tag className="mb-3 fw-bold text-danger">COMICS</Tag>
      <Heading fontFamily={"Roboto Condensed"}>{comic?.title}</Heading>
      <Text>Modified: {comic?.modified.toString().slice(0, 10)}</Text>
      <Image
        className="my-lg-5 mx-auto"
        src={
          comic?.thumbnail
            ? comic?.thumbnail.path + "/detail.jpg"
            : imageNotFound
        }
        opacity={1}
        width={"450px"}
      ></Image>
      <TableContainer marginBottom={100}>
        <Table variant={"simple"} size={"sm"} width={"500px"} marginX={"auto"}>
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
            fontSize={20}
            color={"GrayText"}
            fontFamily={"Roboto Condensed"}
            marginY={50}
          >
            DESCRIPTION
          </Heading>
          <Text fontSize={20}>{comic?.description}</Text>
        </Box>
      ) : (
        <></>
      )}

      {comic?.images && comic?.images.length > 1 ? (
        <Box marginBottom={100}>
          <hr />
          <Heading
            fontSize={20}
            color={"GrayText"}
            fontFamily={"Roboto Condensed"}
            marginY={50}
          >
            PREVIEW
          </Heading>
          {comic?.images.map((img, index) => (
            <div
              key={index}
              id="autoplaying"
              className="carousel slide"
              style={{ width: 320, margin: "auto" }}
              data-bs-ride="carousel"
            >
              <div className=" carousel-inner">
                <div
                  className={
                    selectedIndex == index
                      ? "carousel-item active"
                      : "carousel-item"
                  }
                >
                  <Image
                    src={img.path + "/portrait_uncanny.jpg"}
                    alt="Image"
                    width={300}
                    opacity={1}
                    margin={"auto"}
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#autoplaying"
                data-bs-slide="prev"
                onClick={() => {
                  selectedIndex > 0
                    ? setSelectedIndex(selectedIndex - 1)
                    : setSelectedIndex(comic?.images.length - 1);
                }}
              >
                <span
                  className="carousel-control-prev-icon text-dark"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#autoplaying"
                data-bs-slide="next"
                onClick={() => {
                  selectedIndex < comic?.images.length - 1
                    ? setSelectedIndex(selectedIndex + 1)
                    : setSelectedIndex(0);
                }}
              >
                <span
                  className="carousel-control-next-icon text-dark"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          ))}
        </Box>
      ) : (
        <></>
      )}

      {comic?.characters.items.length != 0 ? (
        <Box marginBottom={100}>
          <hr />
          <Heading
            fontSize={20}
            color={"GrayText"}
            fontFamily={"Roboto Condensed"}
            marginY={50}
          >
            CHARACTERS
          </Heading>
          <TableContainer>
            <Table width={"600px"} margin={"auto"}>
              <Tbody>
                {characters?.map((character, index) => (
                  <Tr key={index}>
                    <Td
                      fontSize={20}
                      onClick={() =>
                        onSelect(character?.resourceURI.slice(36) || "")
                      }
                    >
                      {character?.name.toUpperCase()}
                    </Td>
                    <Td>
                      <Image
                        width={200}
                        opacity={1}
                        src={
                          character?.thumbnail.path + "/standard_fantastic.jpg"
                        }
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
}

export default Comic;
