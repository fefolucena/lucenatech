import {
  Button,
  Divider,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { Contact } from "../Contact/Contact";

interface GrowthServiceProps {
  isOpen: boolean;
  onClose: () => void;
}

const GrowthService: React.FC<GrowthServiceProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Growth</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Os Serviços de Growth incluem:</Text>
          <UnorderedList>
            <ListItem>
              <b>SEO (Otimização para Mecanismos de Busca)</b>: Melhoramos sua
              classificação nos resultados de pesquisa, aumentando a
              visibilidade e atraindo tráfego orgânico de alta qualidade.
            </ListItem>
            <Divider />
            <ListItem>
              <b>Testes A/B</b>: Implementamos testes A/B para aprimorar a
              experiência do usuário, identificando e adotando as melhores
              práticas de conversão.
            </ListItem>
            <Divider />
            <ListItem>
              <b>Integrações e Gestão de Mídia / Marketing</b>: Maximizamos seu
              alcance através da integração e gestão de estratégias de marketing
              em várias plataformas, incluindo mídias sociais, anúncios pagos e
              outras táticas de marketing.
            </ListItem>
            <Divider />
            <ListItem>
              <b>Análises de Performance</b>: Realizamos análises detalhadas de
              desempenho para medir o sucesso de seu site, produtos e campanhas,
              identificando oportunidades de melhoria e otimização contínua.
            </ListItem>
            <Divider />
          </UnorderedList>
          <Text>
            Esses serviços são projetados para impulsionar o crescimento de seus
            negócios, otimizando a presença online, aumentando a conversão e
            fornecendo informações valiosas por meio de análises de dados.
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Fechar
          </Button>
          <Contact />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default GrowthService;
