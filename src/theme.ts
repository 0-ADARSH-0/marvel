import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#dadada",
      100: "#b8b8b8",
      200: "#a1a1a1",
      300: "#898989",
      400: "#606060",
      500: "#525252",
      600: "#363636",
      700: "#262626",
      800: "#262626",
      900: "#222222",
    },
  },
});

export default theme;
