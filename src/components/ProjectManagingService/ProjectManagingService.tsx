import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Contact } from "../Contact/Contact";

interface ProjectManagingServiceProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProjectManagingService: React.FC<ProjectManagingServiceProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Gerenciamento de Projetos</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            Com uma trajetória de anos de experiência dedicados ao suporte e
            gerenciamento de produtos em plataformas de e-commerce, sou
            apaixonado por liderar projetos tecnológicos de ponta.
          </Text>
          <Text>
            Minha experiência me proporcionou uma visão única sobre os desafios
            e oportunidades do mundo do e-commerce. Como especialista em
            gerenciamento de projetos, estou comprometido em aplicar essa
            experiência para entregar soluções eficazes e eficientes. Minha
            abordagem é centrada na excelência, desde a definição de metas
            claras até a entrega de projetos dentro dos prazos e orçamentos
            estabelecidos.
          </Text>
          <Text>
            Estou preparado para impulsionar o sucesso de seus projetos
            tecnológicos e transformar sua visão em realidade.
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

export default ProjectManagingService;
