import { Box, Flex, Text } from "@chakra-ui/layout";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Image,
} from "@chakra-ui/react";
import logo from "../assets/images/logo.png";
import { fetcher } from "../lib/fetcher";
import { useTasks } from "../lib/hooks";
import { Task } from "../lib/types";
import videoStore from "../store/videoStore";

const Sidebar = () => {
  const { tasks, error, isLoading } = useTasks();
  const { getVideosForTesterAndSetState } = videoStore();
  console.log(tasks);

  const handleTesterClick = async (id: number) => {
    getVideosForTesterAndSetState(id);
  };

  return (
    <Box width="15%" bgColor="gray.900">
      <Box>
        <Image src={logo} width="70%" />
      </Box>

      {isLoading ? (
        <Text>LOADING....</Text>
      ) : (
        <Box p="10px">
          <Accordion allowMultiple>
            {tasks.data.map((task: Task) => {
              return (
                <AccordionItem>
                  <AccordionButton
                    fontSize="20px"
                    fontWeight="medium"
                    color="white"
                    bgColor="transparent"
                    border="none"
                    width="100%"
                    display="block"
                    cursor="pointer"
                  >
                    <Flex justify="space-between" alignItems="center">
                      <Text margin="0px">{task.name}</Text>
                      <AccordionIcon fontSize="24px" />
                    </Flex>
                  </AccordionButton>

                  <AccordionPanel>
                    <Box px="10px">
                      {task.tester.map((tester) => (
                        <Text
                          color="white"
                          cursor="pointer"
                          onClick={() => handleTesterClick(tester.id)}
                        >
                          {tester.name}
                        </Text>
                      ))}
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </Box>
      )}
    </Box>
  );
};

export default Sidebar;
