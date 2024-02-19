import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Heading,
  Stack,
  Image,
  Text,
  VStack,
  Grid,
} from "@chakra-ui/react";

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
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">E-commerce Shopify</Heading>
                  <Text>
                    Explore nosso potencial clicando abaixo. Quer uma loja personalizada? Conheça nossa loja de testes Shopify e descubra o que podemos criar para você.
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Ver
                  </Button>
                  <Button variant="ghost" colorScheme="blue">
                    Contratar
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </Grid>
        </Center>
      </VStack>
      <Footer />
    </>
  );
};
