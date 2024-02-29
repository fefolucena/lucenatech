import { Box, Card, CardBody, CardHeader, Center, Container, Divider, Flex, Heading, IconButton, Image, SimpleGrid, Stack, Text, useMediaQuery } from "@chakra-ui/react"
import LandingPageExampleHeader from "../../components/LandingPageExampleHeader/LandingPageExampleHeader"
import LandingPageExampleHamburgerMenu from "../../components/LandingPageExampleHamburgerMenu/LandingPageExampleHamburgerMenu"
import { LandingPageExampleFooter } from "../../components/LandingPageExampleFooter/LandingPageExampleFooter"
import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"

export const LandingPageExample = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }

    const SMALL_SCREEN_BREAKPOINT = "480px"

    const [isSmallScreen] = useMediaQuery(`(max-width: ${SMALL_SCREEN_BREAKPOINT})`)

    const menuItems = [
        {
            title: "INÍCIO",
            href: "#",
        },
        {
            title: "PROCESSOS",
            href: "#proccess",
        },
        {
            title: "SOBRE NÓS",
            href: "#about-us",
        },
        {
            title: "SERVIÇOS",
            href: "#services",
        },
        {
            title: "DEPOIMENTOS",
            href: "#testimonials",
        },
    ]

    const testimonials = [
        {
            name: "Cesar",
            testimonial: "Lorem ipsum dolor sit amet",
            source: "../../../assets/images/profile-sq.jpg"
        },
        {
            name: "Fernando",
            testimonial: "Sit amet dolor lorem ipsum",
            source: "../../../assets/images/profile-sq.jpg"
        },
        {
            name: "Soares",
            testimonial: "Dolor sit amet ipsum lorem",
            source: "../../../assets/images/profile-sq.jpg"
        },
        {
            name: "Lucena",
            testimonial: "Amet sit ipsum dolor lorem",
            source: "../../../assets/images/profile-sq.jpg"
        },
        {
            name: "Junior",
            testimonial: "Ipsum sit amet lorem dolor",
            source: "../../../assets/images/profile-sq.jpg"
        },
    ]

    const [testimonialDisplayed, setTestimonialDisplayed] = useState(2)

    const [hovered, setHovered] = useState(false)



    const handleMouseOver = () => {
        setHovered(true)
    }

    const handleMouseOut = () => {
        setHovered(false)
    }

    function handleTestimonialClick(index: number) {
        setTestimonialDisplayed(index)
    }

    return (
        <>
            {isSmallScreen ? (
                <>
                    <Box marginBottom="20px">
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
                    </Box>
                </>
            )}

            <Box paddingY="5" backgroundColor="#f0f0f0" width={isSmallScreen ? "90%" : "80%"} margin="auto" borderRadius="5px 50px">
                <Container maxW="container.lg">
                    <Heading as="h2" id="proccess" size="2xl" textAlign="center">Nosso processo</Heading>
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
                                    <Text fontSize="6xl" color="#03caad">1</Text>
                                    <Heading size="md">Análise</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text textAlign="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare lacinia vehicula. Nullam pretium auctor convallis. Proin scelerisque fermentum risus sed aliquam.</Text>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardHeader textAlign="center">
                                    <Text fontSize="6xl" color="#03caad">2</Text>
                                    <Heading size="md">Execução</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text textAlign="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare lacinia vehicula. Nullam pretium auctor convallis. Proin scelerisque fermentum risus sed aliquam.</Text>
                                </CardBody>
                            </Card>
                            <Card>
                                <CardHeader textAlign="center">
                                    <Text fontSize="6xl" color="#03caad">3</Text>
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
            <Box paddingY="5" width={isSmallScreen ? "90%" : "80%"} margin="auto">
                <Container maxW="container.lg">
                    <Heading as="h2" id="about-us" size="2xl" textAlign="center">Sobre nós</Heading>
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
            <Box paddingY="5" backgroundColor="#f0f0f0" width={isSmallScreen ? "90%" : "80%"} margin="auto" borderRadius="5px 50px">
                <Container maxW="container.lg">
                    <Heading as="h2" size="2xl" textAlign="center">Marketing de mídias sociais</Heading>
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
                                src="../../assets/images/lp_image2.jpg"
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
            <Box paddingY="5" width={isSmallScreen ? "90%" : "80%"} margin="auto">
                <Container maxW="container.lg">
                    <Heading as="h2" size="2xl" textAlign="center">SEO</Heading>
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
                                src="../../assets/images/lp_image3.png"
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
            <Box paddingY="5" backgroundColor="#f0f0f0" width={isSmallScreen ? "90%" : "80%"} margin="auto" borderRadius="5px 50px">
                <Container maxW="container.lg">
                    <Heading as="h2" size="2xl" textAlign="center">Aumente sua receita</Heading>
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
                                src="../../assets/images/lp_image4.png"
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
            {isSmallScreen ? (
                <Flex align="center" justify="center" direction="column" width="90%" backgroundColor="#235fd8" borderRadius="5px 50px" marginX="auto" marginTop="20px">
                    <Stack direction="row" align="center" justify="center" marginTop="10px">
                        <IconButton boxSize="30px" aria-label="Anterior" icon={<ArrowBackIcon />} onClick={handlePrev} />
                        <Center width="60%">
                            <motion.img
                                key={currentIndex}
                                src={testimonials[currentIndex].source}
                                width="90%"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                        </Center>
                        <IconButton boxSize="30px" aria-label="Próximo" icon={<ArrowForwardIcon />} onClick={handleNext} />
                    </Stack>
                    <Text color="#03caad" mt={4} fontSize="xl">
                        {testimonials[currentIndex].name}
                    </Text>
                    <Text color="white" textAlign="center" fontSize="3xl">"{testimonials[currentIndex].testimonial}"</Text>
                </Flex>
            ) : (
                <Box id="testimonials" paddingY="5" backgroundColor="#235fd8" width="90%" marginX="auto" marginTop="20px" borderRadius="5px 50px">
                    <Box>
                        <Box display="flex" justifyContent="center" paddingY="30px">
                            <Heading as="h3" color="white">"{testimonials[testimonialDisplayed].testimonial}"</Heading>
                        </Box>
                        <Box display="flex" justifyContent="center" paddingY="30px">
                            {testimonials.map((testimonial, index) => (
                                <Box
                                    onMouseOver={handleMouseOver}
                                    onMouseOut={handleMouseOut}
                                    onClick={() => handleTestimonialClick(index)}
                                    cursor={hovered ? "pointer" : "default"}
                                    marginX="30px"
                                >
                                    <Text color="#03caad" textAlign="center" fontSize="3xl" fontWeight="semibold">{testimonial.name}</Text>
                                    <Image
                                        key={index}
                                        src={testimonial.source}
                                        marginX="auto" borderRadius="full"
                                        border={(testimonialDisplayed === index) ? "3px solid white" : ""}
                                        boxSize="150px"
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            )}
            <LandingPageExampleFooter />
        </>
    )
}