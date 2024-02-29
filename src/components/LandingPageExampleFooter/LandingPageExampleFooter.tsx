import { Box, Button, Center, Container, Divider, Heading, Input, Text, useMediaQuery } from "@chakra-ui/react";

export const LandingPageExampleFooter = () => {
    const SMALL_SCREEN_BREAKPOINT = "480px";

    const [isSmallScreen] = useMediaQuery(`(max-width: ${SMALL_SCREEN_BREAKPOINT})`);

    return (
        <Box marginTop="20px" paddingY="5" backgroundColor="#f0f0f0" marginX="auto">
            <Container maxW="container.lg">
                <Heading as="h2" size="2xl" textAlign="center">Eu quero mais informações!</Heading>
                <Center>
                    <Divider
                        borderColor="#03caad"
                        borderBottomWidth="5px"
                        width="20%"
                        marginTop="2"
                        marginBottom="4"
                    />
                </Center>
                <Box display="flex" width={isSmallScreen ? "80%" : "50%"} marginX="auto" marginY="10px">
                    <Input placeholder="Insira seu e-mail aqui" variant="outline" backgroundColor="white" />
                    <Button colorScheme="teal" size="md">
                        ENVIAR
                    </Button>
                </Box>
            </Container>
            <Divider width="80%" borderBottomWidth="3px" borderColor="#e5e5e5" marginX="auto" />
            <Text textAlign="center" color="#9a9a9a">copyright © Sua Empresa - CNPJ: 00.000.000/0000-00</Text>
        </Box>
    );
};