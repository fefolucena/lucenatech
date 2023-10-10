// import "./style.css"

import { Box, Card, CardBody, Center, Heading, Image } from "@chakra-ui/react";

export const ServiceDetails = () => {
  return (
    <Box textAlign="center">
      <Heading id="service1" marginTop="30px">
        Implementação e consultoria E-commerce
      </Heading>
      <Card variant="filled" maxW="70%" mx="auto">
        <CardBody>
          <Center>
            <Center
              width={{ base: "100%", md: "90%" }}
              flexDirection={{ base: "column", md: "row" }}
            >
              <Box width={{ base: "100%", md: "60%" }}>
                Oferecemos soluções completas de e-commerce, desde a construção
                de sites e cadastro de produtos até implementações estratégicas
                e ajustes de integrações. Combinamos tecnologia de ponta com
                estratégias personalizadas para garantir que sua presença online
                seja altamente eficaz e preparada para o sucesso no competitivo
                mundo do comércio eletrônico.
              </Box>
              <Center width={{ base: "100%", md: "40%" }}>
                <Image
                  src="../../assets/images/services.png"
                  alt="Dan Abramov"
                />
              </Center>
            </Center>
          </Center>
        </CardBody>
      </Card>
      <Heading id="service2" marginTop="30px">
        Growth
      </Heading>
      <Card variant="filled" maxW="70%" mx="auto">
        <CardBody>
          <Center>
            <Center
              width={{ base: "100%", md: "90%" }}
              flexDirection={{ base: "column", md: "row" }}
            >
              <Box width={{ base: "100%", md: "60%" }}>
                Somos focados em resultados, por isto impulsionamos o
                crescimento dos negócios com estratégias abrangentes de SEO,
                marketing digital em plataformas como Facebook e TikTok,
                integração de avançadas ferramentas de CRM e implementação de
                testes A/B para otimização contínua. Além disso, utilizamos
                análises de dados detalhadas com Google Analytics e Google Tag
                Manager (GTM) para garantir que cada campanha seja um sucesso.
                Nosso objetivo é colocar seu negócio na vanguarda do mercado e
                maximizar o retorno sobre o investimento em marketing digital.
              </Box>
              <Center width={{ base: "100%", md: "40%" }}>
                <Image
                  src="../../assets/images/services.png"
                  alt="Dan Abramov"
                />
              </Center>
            </Center>
          </Center>
        </CardBody>
      </Card>
      <Heading id="service3" marginTop="30px">
        Desenvolvimento web
      </Heading>
      <Card variant="filled" maxW="70%" mx="auto">
        <CardBody>
          <Center>
            <Center
              width={{ base: "100%", md: "90%" }}
              flexDirection={{ base: "column", md: "row" }}
            >
              <Box width={{ base: "100%", md: "60%" }}>
                Moldamos soluções personalizadas para atender a uma variedade de
                necessidades, independentemente do nicho. Combinamos expertise
                técnica com criatividade, abordando cada desafio com inovação.
                Não importa se é uma plataforma de e-commerce, um sistema de
                gerenciamento de conteúdo ou uma aplicação personalizada;
                estamos prontos para criar soluções eficazes que resolvam
                problemas e impressionem. Do planejamento à implementação, nossa
                missão é levar sua visão digital além dos limites convencionais,
                entregando resultados notáveis para o seu negócio.
              </Box>
              <Center width={{ base: "100%", md: "40%" }}>
                <Image
                  src="../../assets/images/services.png"
                  alt="Dan Abramov"
                />
              </Center>
            </Center>
          </Center>
        </CardBody>
      </Card>
      <Heading id="service4" marginTop="30px">
        Gerenciamento de Projetos Tecnológicos
      </Heading>
      <Card variant="filled" maxW="70%" mx="auto">
        <CardBody>
          <Center>
            <Center
              width={{ base: "100%", md: "90%" }}
              flexDirection={{ base: "column", md: "row" }}
            >
              <Box width={{ base: "100%", md: "60%" }}>
                Atuamos em Gerenciamento de Projetos Tecnológicos. Com uma
                abordagem rigorosa e orientada para resultados, lideramos
                equipes multidisciplinares na entrega bem-sucedida de projetos
                tecnológicos simples ou complexos. Estabelecemos metas claras,
                garantimos a comunicação eficiente e asseguramos que os projetos
                sejam concluídos de maneira eficaz, cumprindo prazos e
                orçamentos. Nosso compromisso é transformar suas visões em
                realidade tecnológica, com excelência e organização impecável,
                garantindo o sucesso contínuo de seus empreendimentos.
              </Box>
              <Center width={{ base: "100%", md: "40%" }}>
                <Image
                  src="../../assets/images/services.png"
                  alt="Dan Abramov"
                />
              </Center>
            </Center>
          </Center>
        </CardBody>
      </Card>
    </Box>
  );
};
