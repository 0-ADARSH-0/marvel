import { Image } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import error404Img from "./assets/404.png";
import errorImg from "./assets/404.png";

const Error404 = () => {
  const error = useRouteError();
  return (
    <>
      <Image
        src={isRouteErrorResponse(error) ? error404Img : errorImg}
        width={300}
        float={"left"}
      />
    </>
  );
};

export default Error404;
