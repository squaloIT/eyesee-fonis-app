import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Box } from "@chakra-ui/layout";
import Sidebar from "./components/Sidebar/Sidebar";
import PlayerBar from "./components/PlayerBar/PlayerBar";
import MainWrapper from "./components/MainWrapper/MainWrapper";

const theme = extendTheme({
  colors: {
    gray: {
      100: "#f5f5f5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
    components: {
      Button: {
        variants: {
          link: {
            ":focus": {
              outline: "none",
              boxShadow: "none",
            },
          },
        },
      },
    },
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box width="100vw" height="100vh">
        <Box
          position="absolute"
          top="0"
          left="0"
          height="calc(100% - 100px)"
          width="250px"
          bg="black"
          color="gray"
        >
          <Sidebar />
        </Box>

        <Box
          marginLeft="250px"
          marginBottom="100px"
          height="calc(100% - 100px)"
        >
          <MainWrapper />
        </Box>

        <Box
          position="absolute"
          width="100vw"
          bottom="0px"
          left="0px"
          height="100px"
          bg="gray.900"
        >
          <PlayerBar />
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default App;
