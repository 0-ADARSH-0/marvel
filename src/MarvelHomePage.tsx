import { Box, Heading, Text } from "@chakra-ui/react";

const MarvelHomePage = () => {
  return (
    <>
      <Box
        className="container px-3"
        textAlign={"center"}
        fontFamily={"Poppins"}
      >
        <Heading as={"h2"} className="py-5" fontFamily={"Roboto Condensed"}>
          Welcome to the Marvel Universe Explorer - Your Gateway to the Marvel
          Comics Multiverse!
        </Heading>
        <Text>
          Step into a world of limitless imagination and heroic adventures with
          our Marvel Comics API-based web app. Immerse yourself in the rich
          tapestry of Marvel's iconic characters, gripping storylines, and
          breathtaking artwork, all at your fingertips.
        </Text>
        <Text>
          Unleash your inner fan as you browse through a treasure trove of comic
          book data, characters' bios, comic series details, and more. Whether
          you're a seasoned Marvel enthusiast or just beginning your journey,
          our user-friendly interface makes it easy to dive deep into the vast
          Marvel Multiverse.
        </Text>
        <Text>
          Embark on a journey through time and space as you uncover rare issues,
          explore character relationships, and relive legendary battles. With
          the power of the Marvel Comics API, we bring you an ever-expanding
          universe that continues to captivate generations of fans. Join us in
          celebrating the legacy of Stan Lee, Jack Kirby, and the countless
          creators who have shaped Marvel into the pop culture phenomenon it is
          today. Fuel your passion for comics and superheroes as you engage with
          a dynamic platform designed for fans, by fans. Start your exploration
          now, and let the Marvel Universe Explorer be your guide to the
          extraordinary realms of courage, heroism, and imagination. Excelsior!"
        </Text>
      </Box>
    </>
  );
};

export default MarvelHomePage;
