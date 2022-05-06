import { AspectRatio, Box, Center, Flex } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/react";
import fetcher from "../../api/fetcher";
import { getIcon } from "../../lib/helpers";
import useTaskStore from "../../store/taskStore";
import useVideoStore from "../../store/videoStore";

const MainWrapper = () => {
  const { videoCamera, videoScreen } = useVideoStore();
  const { kpiID } = useTaskStore();

  const handleEmotionClick = async (emotion: string) => {
    const res = await fetcher("kpi/emotion/save", {
      data: {
        id: kpiID,
        emotion,
      },
    });
  };

  return videoScreen && videoCamera ? (
    <Flex
      direction="column"
      justify="space-between"
      paddingX="50px"
      paddingY="20px"
      height="100%"
    >
      <Flex justify="space-between">
        <Box>
          <AspectRatio ratio={4 / 3} w="750px">
            <video src={videoCamera} />
          </AspectRatio>
        </Box>

        <Box>
          <AspectRatio ratio={4 / 3} w="750px">
            <video src={videoScreen} />
          </AspectRatio>
        </Box>
      </Flex>

      <Center mt="20px" height="20vh">
        <Flex width="70%" justify="space-between">
          <IconButton
            variant="link"
            cursor="pointer"
            color="red.300"
            as={getIcon("happiness")}
            width="100px"
            height="100px"
            onClick={() => handleEmotionClick("happiness")}
            aria-label="Happines"
          />
          <IconButton
            variant="link"
            cursor="pointer"
            color="red.300"
            as={getIcon("sad")}
            width="100px"
            height="100px"
            onClick={() => handleEmotionClick("sad")}
            aria-label="Sad"
          />
          <IconButton
            variant="link"
            cursor="pointer"
            color="red.300"
            as={getIcon("neutral")}
            width="100px"
            height="100px"
            onClick={() => handleEmotionClick("neutral")}
            aria-label="Neutral"
          />
          <IconButton
            variant="link"
            cursor="pointer"
            color="red.300"
            as={getIcon("suprised")}
            width="100px"
            height="100px"
            onClick={() => handleEmotionClick("suprised")}
            aria-label="Suprised"
          />
          <IconButton
            variant="link"
            cursor="pointer"
            color="red.300"
            as={getIcon("love")}
            width="100px"
            height="100px"
            onClick={() => handleEmotionClick("love")}
            aria-label="Love"
          />
          <IconButton
            variant="link"
            cursor="pointer"
            color="red.300"
            as={getIcon("angry")}
            width="100px"
            height="100px"
            onClick={() => handleEmotionClick("angry")}
            aria-label="Angry"
          />
        </Flex>
      </Center>
    </Flex>
  ) : null;
};

export default MainWrapper;
