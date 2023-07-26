import {
  Box,
  Divider,
  Heading,
  List,
  ListItem,
  Stat,
  StatHelpText,
  StatLabel,
  Tag,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import useData from "../hooks/useData";
import "./News.css";
import NewsSkel from "./NewsSkel";

function News() {
  const { data: queries, error, isLoading } = useData("/stories");
  return (
    <>
      {error && <p className="alert alert-danger">{error.name}</p>}
      {isLoading && <NewsSkel />}
      <div className="container">
        <List spacing={5}>
          {queries
            ? queries.results.map((query) => (
                <Box fontFamily={"Roboto Condensed"} key={query.id}>
                  <Tag className="mb-3 text-danger fw-bold">
                    {query.type?.toUpperCase()}
                  </Tag>
                  <Heading fontFamily={"Roboto Condensed"} as={"h2"}>
                    <ListItem fontWeight={"bold"}>
                      <Stat>
                        <StatLabel
                          className="news"
                          fontSize={30}
                          cursor={"pointer"}
                        >
                          <Link to="">{query.title}</Link>
                        </StatLabel>
                        <StatHelpText
                          paddingTop={2}
                          textAlign={"right"}
                          color={"GrayText"}
                        >
                          {query.modified.toString().slice(0, 10)}
                        </StatHelpText>
                      </Stat>
                      <Divider />
                    </ListItem>
                  </Heading>
                </Box>
              ))
            : null}
        </List>
      </div>
    </>
  );
}

export default News;
