import { Box, Flex, Text } from "@chakra-ui/layout";
import {
  IconButton,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { FiVolume2 } from "react-icons/fi";
import useTaskStore from "../../store/taskStore";
import Player from "./Player";

const PlayerBar = () => {
  const { taskName, testerName } = useTaskStore();

  return (
    <Box height="100px" width="100vw">
      <Flex align="center" justifyContent="space-between" height="100%">
        <Flex
          color="white"
          width="15%"
          pl="30px"
          direction="column"
          height="100%"
          justify="space-evenly"
        >
          <Text fontWeight="bold" fontSize="medium">
            {taskName}
          </Text>
          <Text fontWeight="bold" fontSize="medium">
            {testerName}
          </Text>
        </Flex>

        <Box width="40%">
          <Player />
        </Box>

        <Box width="12%" pr="30">
          <Flex alignItems="center" gap="2" pr="10">
            <IconButton
              aria-label="Volume rocker"
              icon={<FiVolume2 />}
              fontSize="24px"
              outline="none"
              variant="link"
            />

            <Slider min={0} max={100} step={0.1} defaultValue={100}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default PlayerBar;
