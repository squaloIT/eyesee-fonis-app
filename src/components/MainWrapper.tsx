import { AspectRatio, Box, Flex, Text } from "@chakra-ui/layout";

const MainWrapper = () => {
  return (
    <Box p="10px">
      <Flex gap="5">
        <AspectRatio ratio={4 / 3} w="700px" bgColor="yellow">
          <Text>sdasdads</Text>
        </AspectRatio>

        <AspectRatio ratio={4 / 3} w="700px" bgColor="yellow">
          <Text>sdasdads</Text>
        </AspectRatio>
      </Flex>
      <Flex></Flex>
    </Box>
  );
};

export default MainWrapper;
