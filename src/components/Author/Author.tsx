import { Box, Image, Text } from "@chakra-ui/react";

export const Author = () => {
  return (
    <>
      <Box>
        <Image
          borderRadius="full"
          boxSize="200px"
          src="../../../assets/images/profile-sq.jpg"
          alt="Foto de perfil Cesar de Lucena"
        />
      </Box>
      <Box>
        <Text fontSize="5xl">Cesar de Lucena</Text>
      </Box>
      <Box>
        <Text fontSize="2xl">Desenvolvedor fullstack e Product owner</Text>
      </Box>
    </>
  );
};
