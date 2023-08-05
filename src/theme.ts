import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#dadada",
      100: "#c9c9c9",
      200: "#b1b1b1",
      300: "#999999",
      400: "#808080",
      500: "#727272",
      600: "#565656",
      700: "#404040",
      800: "#404040",
      900: "#323232",
    },
  },
});

export default theme;
