import { extendTheme } from "@chakra-ui/react";

//Fonts
import "@fontsource/yaldevi";
import "@fontsource/abhaya-libre";

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
  fonts: {
    heading: `'Yaldevi', sans-serif`,
    body: `'Abhaya Libre', serif,`,
  },
  colors: {
    brand: {
      100: "#d9f0Ed", //Cyan 100
      500: "#0099fe", //Blue 300
      900: "#338c85", //Teal 400
    },
  },
};

const theme = extendTheme({ config });

export default theme;
