import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import {
  ButtonGroup,
  IconButton,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import {
  MdOutlinePauseCircleFilled,
  MdOutlinePlayCircleFilled,
  MdOutlineReplay10,
  MdOutlineForward10,
} from "react-icons/md";

const Player = () => {
  return (
    <Center flexDirection="column">
      <ButtonGroup>
        <IconButton
          aria-label="Previous"
          variant="link"
          outline="none"
          fontSize="24px"
          icon={<MdOutlineReplay10 />}
        />
        <IconButton
          outline="none"
          variant="link"
          aria-label="previous"
          fontSize="40px"
          color="white"
          icon={<MdOutlinePauseCircleFilled />}
        />
        <IconButton
          outline="none"
          variant="link"
          aria-label="previous"
          fontSize="40px"
          color="white"
          icon={<MdOutlinePlayCircleFilled />}
        />
        )
        <IconButton
          outline="none"
          variant="link"
          aria-label="Next"
          fontSize="24px"
          icon={<MdOutlineForward10 />}
        />
      </ButtonGroup>

      <Flex width="100%" alignItems="center" color="white">
        <Box width="10%">
          <Text fontSize="sm">0:00</Text>
        </Box>

        <Box width="80%">
          <Slider min={0} max={100} step={0.1} defaultValue={100}>
            <SliderTrack>
              <SliderFilledTrack bg="tomato" />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>

        <Box width="10%">
          <Text fontSize="sm" textAlign="right">
            0:30
          </Text>
        </Box>
      </Flex>
    </Center>
  );
};

export default Player;
