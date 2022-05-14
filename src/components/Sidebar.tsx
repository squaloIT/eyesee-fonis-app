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

const Sidebar = () => {
  return (
    <Box width="15%" bgColor="gray.900">
      <Box>
        <Image src={logo} width="70%" />
      </Box>

      <Box p="10px">
        <Accordion allowMultiple>
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
                <Text margin="0px">Task 1</Text>
                <AccordionIcon fontSize="24px" />
              </Flex>
            </AccordionButton>

            <AccordionPanel>
              <Box px="10px">
                <Text color="white">Tester 1</Text>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Sidebar;
