import { IconButton, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const [dark, setDark] = useState(colorMode == "dark");
  return (
    <IconButton
      aria-label="switch-mode"
      color="white"
      bgColor={"#404040"}
      icon={dark ? <MdLightMode /> : <MdDarkMode />}
      onClick={() => {
        toggleColorMode();
        setDark(!dark);
      }}
    />
  );
};

export default ColorModeSwitch;
