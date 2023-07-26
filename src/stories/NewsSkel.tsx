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
  var list = [];
  for (var i = 0; i < 20; i++) list.push(i);
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
