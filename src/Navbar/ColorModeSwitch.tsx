import { Icon, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const [dark, setDark] = useState(colorMode == "dark");
  return (
    <Icon
      aria-label="switch-mode"
      color="white"
      children={dark ? <MdLightMode /> : <MdDarkMode />}
      onClick={() => {
        toggleColorMode();
        setDark(!dark);
      }}
    />
  );
};

export default ColorModeSwitch;
