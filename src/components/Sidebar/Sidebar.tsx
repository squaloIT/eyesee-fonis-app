import { Box, Flex, Text } from "@chakra-ui/layout";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  IconButton,
  Image,
} from "@chakra-ui/react";
import logo from "../../assets/images/logo.png";
import { getIcon } from "../../lib/helpers";
import { useTasks } from "../../lib/hooks";
import { Task } from "../../lib/types";
import useVideoStore from "../../store/videoStore";

const Sidebar = () => {
  const { getVideosForTesterAndSetState } = useVideoStore();
  const { tasks, isLoading, isError } = useTasks();
  const tasksList = tasks?.data;

  const handleTesterSelection = (id: Number) => {
    getVideosForTesterAndSetState(id);
  };

  return (
    <Box width="100%" height="100%" px="10px" overflowY="auto">
      <Box paddingY="20px" height="100%">
        <Box>
          <Image src={logo} alt="Logo" height="50px" filter="brightness(1.5)" />
        </Box>

        {!isLoading && !isError && tasksList && (
          <Box marginTop="20px">
            <Accordion allowMultiple>
              {tasksList.map((task: Task) => (
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        <Text>{task.name}</Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} pl={6}>
                    {task.tester.map((tester) => (
                      <Flex alignItems="center">
                        <Button
                          variant="link"
                          onClick={() => handleTesterSelection(tester.id)}
                        >
                          {tester.name}
                        </Button>

                        <IconButton
                          variant="link"
                          color="red.300"
                          as={getIcon(tester.KPI.emotion)}
                          width="20px"
                          height="20px"
                          aria-label="Emotion"
                        />
                      </Flex>
                    ))}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Sidebar;
