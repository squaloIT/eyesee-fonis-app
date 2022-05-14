import { Flex, Box } from "@chakra-ui/react";

const App = () => {
  return (
    <div className="App">
      <Flex height="85vh" className="">
        <Box bgColor="gray.900" width="15%" />
        <Box bgColor="yellow" width="85%" />
      </Flex>

      <Flex height="15vh" bgColor="gray.800" />
    </div>
  );
};

export default App;
