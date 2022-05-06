import { Box, Text } from "@chakra-ui/layout";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Image,
} from "@chakra-ui/react";
import logo from "../../assets/images/logo.png";

const Sidebar = () => {
  return (
    <Box width="100%" height="100%" px="10px" overflowY="auto">
      <Box paddingY="20px" height="100%">
        <Box>
          <Image src={logo} alt="Logo" height="50px" filter="brightness(1.5)" />
        </Box>

        <Box marginTop="20px">
          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text>Task 1</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} pl={6}>
                <Text>Tester 1 </Text>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text>Task 2</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} pl={6}>
                <Text>Tester 2</Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
