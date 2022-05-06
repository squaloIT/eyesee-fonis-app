import { AspectRatio, Box, Center, Flex } from "@chakra-ui/layout";

const MainWrapper = () => {
  return (
    <Flex
      direction="column"
      justify="space-between"
      paddingX="50px"
      paddingY="20px"
      height="100%"
      bg="yellow.300"
    >
      <Flex justify="space-between">
        <Box>
          <AspectRatio ratio={4 / 3} w="750px">
            <Box bg="yellow.500" />
          </AspectRatio>
        </Box>

        <Box>
          <AspectRatio ratio={4 / 3} w="750px">
            <Box bg="yellow.500" width="100%" height="100%" />
          </AspectRatio>
        </Box>
      </Flex>

      <Center mt="20px" bg="yellow.500" height="20vh">
        <Flex width="70%" justify="space-between">
          <Box width="100px" height="100px" bg="green.700" />
          <Box width="100px" height="100px" bg="green.700" />
          <Box width="100px" height="100px" bg="green.700" />
          <Box width="100px" height="100px" bg="green.700" />
          <Box width="100px" height="100px" bg="green.700" />
          <Box width="100px" height="100px" bg="green.700" />
        </Flex>
      </Center>
    </Flex>
  );
};

export default MainWrapper;
