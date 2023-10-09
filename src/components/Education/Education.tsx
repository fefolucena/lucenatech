import { Box, Divider, Text } from "@chakra-ui/react";

export const Education = () => {
  return (
    <>
      <Box>
        <Text fontSize="2xl">Instituto Federal do Rio Grande do Sul</Text>
        <Box className="subtitle mb-3">Sistemas para Internet</Box>
        <Divider />
        <Text fontSize="2xl">Angular JS - Loiane Training</Text>
        <Box className="subtitle mb-3">Framework AngularJS e TypeScript</Box>
        <Divider />
        <Text fontSize="2xl">React JS - Alura</Text>
        <Box className="subtitle mb-3">React</Box>
        <Divider />
        <Text fontSize="2xl">Node JS - Alura</Text>
        <Box className="subtitle mb-3">Node.js, MongoDB, APIs e Express</Box>
        <Divider />
        <Text fontSize="2xl">PHP 7 Completo - Curso do Desenvolvedor Web</Text>
        <Box className="subtitle mb-3">PHP, POO e MySQL</Box>
        <Divider />
        <Text fontSize="2xl">Curso completo de Desenvolvimento Web</Text>
        <Box className="subtitle mb-3">HTML, CSS, Bootstrap, JavaScript e JQuery</Box>
        <Divider />
      </Box>
    </>
  );
};
