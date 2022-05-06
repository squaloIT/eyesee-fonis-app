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
import { formatTime } from "../../lib/helpers";
import useVideoStore from "../../store/videoStore";

const Player = () => {
  const {
    isPlaying,
    setIsPlaying,
    currentTime,
    videoDuration,
    setIsSliding,
    isSliding,
    setSliderValue,
    setCurrentTime,
  } = useVideoStore();

  const handleOnSliding = (val: number) => {
    if (!isSliding) {
      setIsSliding(true);
    } else {
      setCurrentTime(val);
    }
  };

  const handleOnSlidingEnd = (val: number) => {
    setIsSliding(false);
    setSliderValue(val);
  };

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
        {isPlaying ? (
          <IconButton
            outline="none"
            variant="link"
            aria-label="previous"
            fontSize="40px"
            color="white"
            icon={<MdOutlinePauseCircleFilled />}
            onClick={() => setIsPlaying(false)}
          />
        ) : (
          <IconButton
            outline="none"
            variant="link"
            aria-label="previous"
            fontSize="40px"
            color="white"
            icon={<MdOutlinePlayCircleFilled />}
            onClick={() => setIsPlaying(true)}
          />
        )}

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
          <Text fontSize="sm">{formatTime(currentTime)}</Text>
        </Box>

        <Box width="80%">
          <Slider
            aria-label="slider-ex-1"
            defaultValue={0}
            min={0}
            max={videoDuration}
            value={currentTime}
            step={0.00001}
            onChangeEnd={handleOnSlidingEnd}
            onChange={handleOnSliding}
          >
            <SliderTrack>
              <SliderFilledTrack bg="tomato" />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>

        <Box width="10%">
          <Text fontSize="sm" textAlign="right">
            {formatTime(videoDuration)}
          </Text>
        </Box>
      </Flex>
    </Center>
  );
};

export default Player;
