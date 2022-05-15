import { Flex, Box } from "@chakra-ui/react";
import MainWrapper from "./components/MainWrapper";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="App">
      <Flex height="85vh" className="">
        <Sidebar />

        <Box width="85%">
          <MainWrapper />
        </Box>
      </Flex>

      <Flex height="15vh" bgColor="gray.800" />
    </div>
  );
};

export default App;
