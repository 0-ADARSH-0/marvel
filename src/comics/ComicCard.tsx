import { Card, CardBody, CardFooter, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import imageNotFound from "../assets/image-not-found.jpg";
import { Query } from "../entities/interfaces";
import "./ComicCard.css";

interface Props {
  query: Query;
}

const ComicCard = ({ query }: Props) => {
  return (
    <Card
      className="comic-card"
      key={query.id}
      shadow={"none"}
      width={"min-content"}
    >
      <Link to={"/marvel" + query.resourceURI.slice(35)}>
        <Image
          className="image"
          aspectRatio={3 / 4}
          src={
            query.thumbnail
              ? query.thumbnail.path + "/portrait_incredible.jpg"
              : imageNotFound
          }
          opacity={1}
          cursor={"pointer"}
        />
      </Link>
      <CardBody
        className="comic-title"
        paddingX={0}
        paddingBottom={1}
        fontFamily={"Roboto Condensed"}
        cursor={"pointer"}
        width={"fit-content"}
      >
        <Link to={"/marvel" + query.resourceURI.slice(35)}>
          <Text fontWeight={"bold"}>{query.title}</Text>
        </Link>
      </CardBody>
      <CardFooter
        padding={0}
        fontSize={12}
        fontFamily={"Helvetica"}
        cursor={"pointer"}
      >
        {query.creators?.items.slice(0, 2).map((creator) => (
          <Text
            key={creator.name}
            className="comic-creator overflow-hidden me-2"
          >
            <Link to={"/marvel" + creator.resourceURI.slice(35)}>
              {creator.name}
            </Link>
          </Text>
        ))}
        {query.creators?.items.length > 3 && <p>etc</p>}
      </CardFooter>
    </Card>
  );
};

export default ComicCard;
