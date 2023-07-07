import { Card, SimpleGrid, SkeletonText } from "@chakra-ui/react";

function ComicsSkel() {
  var list = [];
  for (var i = 0; i < 20; i++) list.push(i);
  return (
    <div className="container">
      <SimpleGrid
        spacing={5}
        columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}
        className="container"
      >
        {list.map((item) => (
          <Card key={item}>
            <SkeletonText skeletonHeight={20} noOfLines={1} />
            <SkeletonText skeletonHeight={2} noOfLines={1} />
            <SkeletonText skeletonHeight={1} noOfLines={1} />
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default ComicsSkel;
