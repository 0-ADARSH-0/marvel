import { Card, SimpleGrid, Skeleton, SkeletonText } from "@chakra-ui/react";

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
            <Skeleton animation={"wave"} height={300} className="mb-3" />
            <SkeletonText skeletonHeight={5} noOfLines={2} />
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default ComicsSkel;
