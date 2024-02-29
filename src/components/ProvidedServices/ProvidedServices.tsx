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
} from "@chakra-ui/react"
import { useState } from "react"
import ConsultingService from "../ConsultingService/ConsultingService"
import GrowthService from "../GrowthService/Growth"
import ProjectManagingService from "../ProjectManagingService/ProjectManagingService"
import WebDevelopmentService from "../WebDevelopmentService/WebDevelopmentService"

export const ProvidedServices = () => {
  const [isConsultingServiceOpen, setConsultingServiceOpen] = useState(false)
  const [isGrowthServiceOpen, setGrowthServiceOpen] = useState(false)
  const [isWebDevelopmentServiceOpen, setWebDevelopmentServiceOpen] = useState(false)
  const [isProjectManagingServiceOpen, setProjectManagingServiceOpen] = useState(false)

  const openConsultingService = () => {
    setConsultingServiceOpen(true)
  }

  const openGrowthService = () => {
    setGrowthServiceOpen(true)
  }

  const openWebDevelopmentService = () => {
    setWebDevelopmentServiceOpen(true)
  }

  const openProjectManagingService = () => {
    setProjectManagingServiceOpen(true)
  }

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
                    alt=""
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
                <Button onClick={openConsultingService}>Saiba mais</Button>
                {isConsultingServiceOpen && (
                  <ConsultingService
                    isOpen={isConsultingServiceOpen}
                    onClose={() => setConsultingServiceOpen(false)}
                  />
                )}
              </CardFooter>
            </Card>
            <Card>
              <Box minHeight="130px">
                <CardHeader>
                  <Image
                    src="../../assets/icons/growth.png"
                    alt=""
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
                <Button onClick={openGrowthService}>Saiba mais</Button>
                {isGrowthServiceOpen && (
                  <GrowthService
                    isOpen={isGrowthServiceOpen}
                    onClose={() => setGrowthServiceOpen(false)}
                  />
                )}
              </CardFooter>
            </Card>
            <Card>
              <Box minHeight="130px">
                <CardHeader>
                  <Image src="../../assets/icons/dev.png" alt="" boxSize="10" />
                  <Heading size="md">Desenvolvimento Web</Heading>
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
                <Button onClick={openWebDevelopmentService}>Saiba mais</Button>
                {isWebDevelopmentServiceOpen && (
                  <WebDevelopmentService
                    isOpen={isWebDevelopmentServiceOpen}
                    onClose={() => setWebDevelopmentServiceOpen(false)}
                  />
                )}
              </CardFooter>
            </Card>
            <Card>
              <Box minHeight="130px">
                <CardHeader>
                  <Image
                    src="../../assets/icons/management.png"
                    alt=""
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
                <Button onClick={openProjectManagingService}>Saiba mais</Button>
                {isProjectManagingServiceOpen && (
                  <ProjectManagingService
                    isOpen={isProjectManagingServiceOpen}
                    onClose={() => setProjectManagingServiceOpen(false)}
                  />
                )}
              </CardFooter>
            </Card>
          </SimpleGrid>
        </Center>
      </Center>
    </>
  )
}
