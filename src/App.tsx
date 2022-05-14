import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="App">
      <Flex height="85vh" className="">
        <Sidebar />
        <Box bgColor="yellow" width="85%" />
      </Flex>

      <Flex height="15vh" bgColor="gray.800" />
    </div>
  );
};

export default App;
