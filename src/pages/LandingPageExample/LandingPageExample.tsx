import { Box, Button, Card, CardBody, CardHeader, Center, Container, Divider, Heading, Image, SimpleGrid, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import LandingPageExampleHeader from "../../components/LandingPageExampleHeader/LandingPageExampleHeader";
import LandingPageExampleHamburgerMenu from "../../components/LandingPageExampleHamburgerMenu/LandingPageExampleHamburgerMenu";

export const LandingPageExample = () => {
    const SMALL_SCREEN_BREAKPOINT = "480px";

    const [isSmallScreen] = useMediaQuery(`(max-width: ${SMALL_SCREEN_BREAKPOINT})`);

    const menuItems = [
        {
            title: "INÍCIO",
            href: "#",
        },
        {
            title: "PROCESSOS",
            href: "#",
        },
        {
            title: "SOBRE NÓS",
            href: "#",
        },
        {
            title: "SERVIÇOS",
            href: "#",
        },
        {
            title: "DEPOIMENTOS",
            href: "#",
        },
    ];

    return (
        <>
            {/* {isSmallScreen ? <LandingPageExampleHamburgerMenu menuItems={menuItems} /> : <LandingPageExampleHeader menuItems={menuItems} />}
            <Box width="100%" height="720px">
                <Box height="100%" display="flex">
                    <Box width="50%" display="flex" alignItems="center" justifyContent="center">
                        <Box width="50%">
                            <Text as="span" fontSize="25" fontWeight="600" paddingY="10px">Lorem ipsum dolor</Text>
                            <Text as="h1" fontWeight="700" paddingY="10px">Gerenciamento de Redes Sociais</Text>
                            <Box width="60%" backgroundColor="#03caad" paddingY="10px" borderRadius="5px" justifyContent="center" display="flex">
                                <Text as="span" fontWeight="700">MAIS INFORMAÇÕES</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box width="50%" height="100%">
                        <Image
                            src="../../assets/images/lp_ex_banner.jpg"
                            boxSize="100%"
                            maxWidth="720px"
                            objectFit="contain"
                            margin="auto"
                        />
                    </Box>
                </Box>
            </Box> */}
            {isSmallScreen ? (
                <>
                    <Box>
                        <Box display="flex" justifyContent="space-between" alignItems="center" paddingX={4} paddingY={2}>
                            <Box backgroundColor="#03caad" width="35px" height="35px" marginX="10px" borderRadius="5px" />
                            <LandingPageExampleHamburgerMenu menuItems={menuItems} />
                        </Box>
                        <Box>
                            <Image src="../../assets/images/lp_ex_banner.jpg" boxSize="100%" objectFit="contain" />
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Box width="80%">
                                <Text as="span" fontSize="25" fontWeight="600" paddingY="10px" display="block" textAlign="center">Lorem ipsum dolor</Text>
                                <Text as="h1" fontWeight="700" paddingY="10px" display="block" textAlign="center">Gerenciamento de Redes Sociais</Text>
                                <Box width="80%" backgroundColor="#03caad" paddingY="10px" borderRadius="5px" justifyContent="center" display="flex" margin="auto">
                                    <Text as="span" fontWeight="700">MAIS INFORMAÇÕES</Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </>
            ) : (
                <>
                    <LandingPageExampleHeader menuItems={menuItems} />
                    <Box width="100%" height="720px">
                        <Box height="100%" display="flex">
                            <Box width="50%" display="flex" alignItems="center" justifyContent="center">
                                <Box width="50%">
                                    <Text as="span" fontSize="25" fontWeight="600" paddingY="10px">Lorem ipsum dolor</Text>
                                    <Text as="h1" fontWeight="700" paddingY="10px">Gerenciamento de Redes Sociais</Text>
                                    <Box width="60%" backgroundColor="#03caad" paddingY="10px" borderRadius="5px" justifyContent="center" display="flex">
                                        <Text as="span" fontWeight="700">MAIS INFORMAÇÕES</Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Box width="50%" height="100%">
                                <Image
                                    src="../../assets/images/lp_ex_banner.jpg"
                                    boxSize="100%"
                                    maxWidth="720px"
                                    objectFit="contain"
                                    margin="auto"
                                />
                            </Box>
                        </Box>
                    </Box></>
            )}

            <Box paddingY="5" backgroundColor="#f0f0f0">
                <Container maxW="container.lg">
                    <Heading as="h2" size="2xl" textAlign="center">Nosso Processo</Heading>
                    <Center>
                        <Divider
                            borderColor="#03caad"
                            borderBottomWidth="5px"
                            width="20%"
                            marginTop="2"
                            marginBottom="4"
                        />
                    </Center>
                    <Center marginY="10">
                        <SimpleGrid width="100%" spacing={10} columns={{ base: 1, sm: 1, md: 3, lg: 3 }} >
                            <Card>
                                <CardHeader textAlign="center">
                                    <Text fontSize='6xl' color="#03caad">1</Text>
                                    <Heading size="md">Análise</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text textAlign="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare lacinia vehicula. Nullam pretium auctor convallis. Proin scelerisque fermentum risus sed aliquam.</Text>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardHeader textAlign="center">
                                    <Text fontSize='6xl' color="#03caad">2</Text>
                                    <Heading size="md">Execução</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text textAlign="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare lacinia vehicula. Nullam pretium auctor convallis. Proin scelerisque fermentum risus sed aliquam.</Text>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardHeader textAlign="center">
                                    <Text fontSize='6xl' color="#03caad">3</Text>
                                    <Heading size="md">Sucesso</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text textAlign="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare lacinia vehicula. Nullam pretium auctor convallis. Proin scelerisque fermentum risus sed aliquam.</Text>
                                </CardBody>
                            </Card>
                        </SimpleGrid>
                    </Center>
                </Container>
            </Box>
            <Box paddingY="5">
                <Container maxW="container.lg">
                    <Heading as="h2" size="2xl" textAlign="center">Sobre nós</Heading>
                    <Center>
                        <Divider
                            borderColor="#03caad"
                            borderBottomWidth="5px"
                            width="20%"
                            marginTop="2"
                            marginBottom="4"
                        />
                    </Center>
                    <Stack
                        direction={isSmallScreen ? "column" : "row"}
                        width="100%"
                        marginY="10"
                        spacing={isSmallScreen ? 4 : 8}
                        align="center"
                    >
                        <Box width={isSmallScreen ? "100%" : "50%"} marginX={isSmallScreen ? 0 : 5}>
                            <Image
                                src="../../assets/images/lp_image1.png"
                                boxSize="100%"
                                maxWidth="720px"
                                objectFit="contain"
                                margin="auto"
                            />
                        </Box>
                        <Box width={isSmallScreen ? "100%" : "50%"} marginX={isSmallScreen ? 0 : 5}>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Text>
                            <Text>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Text>
                        </Box>
                    </Stack>
                </Container>
            </Box>
        </>
    );
};