import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

export const ProvidedServices = () => {
  return (
    <>
      <Center marginTop="20px">
        <Center width="70%" flexDirection="column">
          <Heading>Serviços</Heading>
          <SimpleGrid
            spacing={4}
            columns={{ base: 1, sm: 2, md: 4, lg: 4 }}
            width="100%"
            marginTop="5px"
          >
            <Card>
              <Box minHeight="130px">
                <CardHeader>
                  <Image
                    src="../../assets/icons/ecommerce.png"
                    alt="Ícone de um computador"
                    boxSize="10"
                  />
                  <Heading size="md">Consultoria E-commerce</Heading>
                </CardHeader>
              </Box>
              <CardBody>
                <Text textAlign="left">
                  Ofereço soluções sob medida para aprimorar sua presença
                  digital. Com vasta experiência em e-commerce, transformo
                  conceitos em realidade, criando plataformas seguras e
                  eficientes. Além disso, minha consultoria estratégica vai além
                  da tecnologia, focando na otimização da experiência do
                  cliente, integrações de marketing e maximização da conversão.
                </Text>
              </CardBody>
              <CardFooter>
                <ScrollLink to="service1" smooth={true} duration={500}>
                  <Button>Saiba mais</Button>
                </ScrollLink>
              </CardFooter>
            </Card>
            <Card>
              <Box minHeight="130px">
                <CardHeader>
                  <Image
                    src="../../assets/icons/growth.png"
                    alt="Ícone de um gráfico apontando para cima"
                    boxSize="10"
                  />
                  <Heading size="md">Growth</Heading>
                </CardHeader>
              </Box>
              <CardBody>
                <Text>
                  Alavancando seu crescimento através de novas estratégias
                  digitais. Com habilidades em SEO para aumentar seu alcance
                  online, implementação de sistemas CRM para fortalecer a
                  fidelização de clientes e a expertise em Google Analytics para
                  analisar dados e otimizar estratégias, estou pronto para
                  impulsionar o crescimento sustentável do seu negócio.
                </Text>
              </CardBody>
              <CardFooter>
                <ScrollLink to="service2" smooth={true} duration={500}>
                  <Button>Saiba mais</Button>
                </ScrollLink>
              </CardFooter>
            </Card>
            <Card>
              <Box minHeight="130px">
                <CardHeader>
                  <Image
                    src="../../assets/icons/dev.png"
                    alt="Ícone de um computador e engrenagens"
                    boxSize="10"
                  />
                  <Heading size="md">Desenvolvimento web</Heading>
                </CardHeader>
              </Box>
              <CardBody>
                <Text>
                  Construção web com paixão e expertise. Com experiência em
                  desenvolvimento web, estou aqui para criar sites responsivos,
                  landing pages atrativas e funcionalidades avançadas que
                  impulsionam a sua presença online. Transforme visitantes em
                  clientes com soluções web sob medida.
                </Text>
              </CardBody>
              <CardFooter>
                <ScrollLink to="service3" smooth={true} duration={500}>
                  <Button>Saiba mais</Button>
                </ScrollLink>
              </CardFooter>
            </Card>
            <Card>
              <Box minHeight="130px">
                <CardHeader>
                  <Image
                    src="../../assets/icons/management.png"
                    alt="Ícone apresentando uma mulher com um gráfico apontando para cima"
                    boxSize="10"
                  />
                  <Heading size="md">Gerenciamento de Projetos</Heading>
                </CardHeader>
              </Box>
              <CardBody>
                <Text>
                  Estabelececimento de metas claras, manter a comunicação
                  eficiente e assegurar que os projetos sejam concluídos de
                  maneira eficaz, cumprindo os prazos e orçamentos estipulados.
                  Tenho o compromisso de transformar suas ideias em realidade,
                  com excelência técnica e organização impecável.
                </Text>
              </CardBody>
              <CardFooter>
                <ScrollLink to="service4" smooth={true} duration={500}>
                  <Button>Saiba mais</Button>
                </ScrollLink>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </Center>
      </Center>
    </>
  );
};
