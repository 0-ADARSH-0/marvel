import {
  Box,
  Divider,
  Heading,
  Link,
  List,
  ListItem,
  Stat,
  StatHelpText,
  StatLabel,
  Tag,
} from "@chakra-ui/react";
import { Query } from "../../hooks/useQueries";

import "./News.css";

interface Props {
  queries: Query[] | undefined;
  onSelect: (queryId: number) => void;
}

function News({ queries, onSelect }: Props) {
  return (
    <div className="container">
      <List spacing={5}>
        {queries?.map((query) => (
          <Box fontFamily={"Roboto Condensed"} key={query.id}>
            <Tag className="mb-3 text-danger fw-bold">
              {query.type?.toUpperCase()}
            </Tag>
            <Heading fontFamily={"Roboto Condensed"} as={"h2"}>
              <ListItem fontWeight={"bold"}>
                <Stat>
                  <StatLabel className="news" fontSize={30} cursor={"pointer"}>
                    <a href="" onClick={() => onSelect(query.id)}>
                      {query.title}
                    </a>
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
        ))}
      </List>
    </div>
  );
}

export default News;
