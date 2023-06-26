import {
  Box,
  Divider,
  Heading,
  List,
  ListItem,
  SkeletonText,
  Tag,
} from "@chakra-ui/react";

function NewsSkel() {
  const list = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <div className="container">
      <List spacing={5}>
        {list.map((item) => (
          <Box fontFamily={"Roboto Condensed"} key={item}>
            <Tag className="mb-3 text-danger fw-bold"></Tag>
            <Heading as={"h2"}>
              <ListItem>
                <SkeletonText noOfLines={2} skeletonHeight={5} />
                <Divider />
              </ListItem>
            </Heading>
          </Box>
        ))}
      </List>
    </div>
  );
}

export default NewsSkel;
