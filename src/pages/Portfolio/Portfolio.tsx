import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { useState } from "react"
import { Contact } from "../../components/Contact/Contact"

export const Portfolio = () => {
  return (
    <>
      <Header />
      <VStack align="center">
        <Heading>Portfólio</Heading>
        <Center>
          <Grid
            templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
            gap={6}
            width="100%"
            maxW="1000px"
          >
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="../../assets/images/shopify_logo.png"
                  alt="Ícone da loja Shopify"
                  borderRadius="lg"
                  height="150px"
                  marginX="auto"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">E-commerce Shopify</Heading>
                  <Text>
                    Explore nosso potencial clicando abaixo. Quer uma loja personalizada? Conheça nossa loja de testes Shopify e descubra o que podemos criar para você. (senha da loja "rehose")
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter marginX="auto">
                <ButtonGroup spacing="2">
                  <Link to="https://lucena-tech.myshopify.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="solid" colorScheme="blue">
                      Ver
                    </Button>
                  </Link>
                  <Contact />
                </ButtonGroup>
              </CardFooter>
            </Card>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="../../assets/images/landing_page_logo.png"
                  alt="Ícone da landing page"
                  borderRadius="lg"
                  height="150px"
                  marginX="auto"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Landing Page Minimalista</Heading>
                  <Text>
                    Descubra a essência da simplicidade com nossa Landing Page Minimalista. Navegue por um design limpo e intuitivo, mergulhando na experiência sem distrações. Aqui, todas as informações essenciais estão cuidadosamente apresentadas, sem excessos, proporcionando uma experiência fluida e focada em seu objetivo.
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter marginX="auto">
                <ButtonGroup spacing="2">
                  <Link to="/landing-page-example" target="_blank">
                    <Button variant="solid" colorScheme="blue">
                      Ver
                    </Button>
                  </Link>
                  <Contact />
                </ButtonGroup>
              </CardFooter>
            </Card>
          </Grid>
        </Center>
      </VStack>
      <Footer />
    </>
  )
}
