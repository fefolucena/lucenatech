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

interface WebDevelopmentServiceProps {
  isOpen: boolean;
  onClose: () => void;
}

const WebDevelopmentService: React.FC<WebDevelopmentServiceProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Desenvolvimento Web</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Os Serviços de Desenvolvimento Web incluem:</Text>
          <UnorderedList>
            <ListItem>
              <b>Desenvolvimento de Websites e Landing Pages</b>: criação
              websites e landing pages atraentes, funcionais e responsivos que
              representam sua marca e oferecem uma experiência de usuário
              excepcional.
            </ListItem>
            <Divider />
            <ListItem>
              <b>Desenvolvimento e Suporte de Funcionalidades</b>: ofereço
              desenvolvimento contínuo e suporte de funcionalidades para seu
              site ou e-commerce, garantindo que suas operações online estejam
              em constante evolução e funcionando sem problemas.
            </ListItem>
            <Divider />
            <ListItem>
              <b>Desenvolvimento de E-commerce em Plataformas Headless</b>:
              desenvolvimento de e-commerce em plataformas headless, oferecendo
              flexibilidade e personalização avançada para atender às
              necessidades exclusivas de sua empresa.
            </ListItem>
            <Divider />
          </UnorderedList>
          <Text>
            Esses serviços abrangentes de desenvolvimento web são projetados
            para elevar a presença digital de sua empresa, garantindo que seu
            site seja uma ferramenta eficaz para atrair clientes e alcançar seus
            objetivos online.
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

export default WebDevelopmentService;
