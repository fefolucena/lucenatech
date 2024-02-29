import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";

interface LandingPageExampleHeaderProps {
  menuItems: { title: string; href: string }[];
}

const LandingPageExampleHeader: React.FC<LandingPageExampleHeaderProps> = ({ menuItems }) => {
  return (
    <Box padding="4">
      <Flex height="60px" alignItems="center" justifyContent="space-between">
        <Box width="40%" height="100%" display="flex" alignItems="center" textAlign="center">
          <Box backgroundColor="#03caad" width="35px" height="35px" marginX="10px" borderRadius="5px">
          </Box>
          <Box>
            <Text as='span' fontWeight="800">SUA LOGO</Text>
          </Box>
        </Box>
        <Spacer />
        <Box width="60%" height="100%" display="flex" justifyContent="center" alignItems="center" textAlign="center">
          {menuItems.map((item, index) => (
            <Box key={index} flex="1" marginX="2" height="80%" display="flex" alignItems="center" justifyContent="center">
              <Text as="span"fontWeight="bold">{item.title}</Text>
            </Box>
          ))}
          <Box flex="1" marginX="2" height="80%" display="flex" alignItems="center" justifyContent="center" borderRadius="5px" backgroundColor="#03caad">
            <Text as="span" fontWeight="bold" display="flex" alignItems="center" justifyContent="center">CONTATO</Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default LandingPageExampleHeader;