// import "./style.css"

import { QuestionIcon } from "@chakra-ui/icons";
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
//import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Header } from "../../components/Header/Header";

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
          >
            <Card>
              <CardHeader>
                <QuestionIcon boxSize="10" />
                <Heading size="md">
                  Implementação e consultoria E-commerce
                </Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  Com experiência sólida em desenvolvimento de e-commerce,
                  podemos te ajudar a transformar sua visão em realidade. Seja
                  construindo do zero ou otimizando sua plataforma existente!
                </Text>
              </CardBody>
              <CardFooter>
                <ScrollLink to="service1" smooth={true} duration={500}>
                  <Button>Saiba mais</Button>
                </ScrollLink>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <QuestionIcon boxSize="10" />
                <Heading size="md">Growth</Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  Alavancamos seu crescimento através de novas estratégias
                  digitais. Com habilidades em SEO para aumentar seu alcance
                  online, implementação de sistemas CRM para fortalecer a
                  fidelização de clientes e a expertise em Google Analytics para
                  analisar dados e otimizar estratégias, estamos prontos para
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
              <CardHeader>
                <QuestionIcon boxSize="10" />
                <Heading size="md">Desenvolvimento web</Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  Construção web com paixão e expertise. Com experiência em
                  desenvolvimento web, estamos aqui para criar sites
                  responsivos, landing pages atrativas e funcionalidades
                  avançadas que impulsionam a sua presença online. Transforme
                  visitantes em clientes com soluções web sob medida.
                </Text>
              </CardBody>
              <CardFooter>
                <ScrollLink to="service3" smooth={true} duration={500}>
                  <Button>Saiba mais</Button>
                </ScrollLink>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <QuestionIcon boxSize="10" />
                <Heading size="md">
                  Gerenciamento de Projetos Tecnológicos
                </Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  Estabelececimento de metas claras, manter a comunicação
                  eficiente e assegurar que os projetos sejam concluídos de
                  maneira eficaz, cumprindo os prazos e orçamentos estipulados.
                  Estamos prontos para transformar suas ideias em realidade, com
                  excelência técnica e organização impecável.
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
