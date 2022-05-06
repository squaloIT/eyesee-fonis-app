import { Box, Flex, Text } from "@chakra-ui/layout";
import {
  IconButton,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { FiVolume, FiVolume1, FiVolume2, FiVolumeX } from "react-icons/fi";
import useTaskStore from "../../store/taskStore";
import useVideoStore from "../../store/videoStore";
import Player from "./Player";

const PlayerBar = () => {
  const { volume, setVolume } = useVideoStore();
  const { taskName, testerName } = useTaskStore();

  const handleVolumeChange = (val: number) => {
    setVolume(val);
  };

  const getIcon = () => {
    if (volume === 0) {
      return <FiVolumeX />;
    }
    if (volume < 30) {
      return <FiVolume />;
    }
    if (volume < 60) {
      return <FiVolume1 />;
    }

    return <FiVolume2 />;
  };

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
              icon={getIcon()}
              fontSize="24px"
              outline="none"
              variant="link"
            />

            <Slider
              aria-label="slider-ex-1"
              defaultValue={volume}
              value={volume}
              onChange={handleVolumeChange}
              step={0.00001}
              min={0}
              max={100}
            >
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
