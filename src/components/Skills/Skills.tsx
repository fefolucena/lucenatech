import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Divider, ListItem, Text, UnorderedList } from "@chakra-ui/react";


export const Skills = () => {
  return (
    <>
      <Box>
        <Text fontSize="2xl">
          Linguagens de programação, banco de dados e estilos
        </Text>
          <Text><ArrowForwardIcon />{''}Javascript (Node.js, React e Angular)</Text>
          <Text><ArrowForwardIcon />{''}MySQL e MongoDB</Text>
          <Text><ArrowForwardIcon />{''}HTML, CSS e Bootstrap</Text>
          <Text><ArrowForwardIcon />{''}PHP (Laravel)</Text>
        <Divider />
        <Text fontSize="2xl">Metodologias ágeis</Text>
          <Text><ArrowForwardIcon />{''}Scrum</Text>
          <Text><ArrowForwardIcon />{''}Kanban</Text>
          <Text><ArrowForwardIcon />{''}Lean</Text>
        <Divider />
        <Text fontSize="2xl">Idiomas</Text>
          <Text><ArrowForwardIcon />{''}Inglês (avançado)</Text>
          <Text><ArrowForwardIcon />{''}Espanhol (intermediário)</Text>
          <Text><ArrowForwardIcon />{''}Libras (básico)</Text>
        <Divider />
      </Box>
    </>
  );
};
