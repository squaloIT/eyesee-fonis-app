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
import { useTasks } from "../lib/hooks";
import { Task } from "../lib/types";

const Sidebar = () => {
  const { tasks, error, isLoading } = useTasks();
  console.log(tasks);

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
                  >
                    <Flex justify="space-between" alignItems="center">
                      <Text margin="0px">{task.name}</Text>
                      <AccordionIcon fontSize="24px" />
                    </Flex>
                  </AccordionButton>

                  <AccordionPanel>
                    <Box px="10px">
                      {task.tester.map((tester) => (
                        <Text color="white">{tester.name}</Text>
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
