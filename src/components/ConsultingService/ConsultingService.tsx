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

interface ConsultingServiceProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultingService: React.FC<ConsultingServiceProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Consultoria E-commerce</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            Os Serviços de Implementação e Consultoria em E-commerce incluem:
          </Text>
          <UnorderedList>
            <ListItem>
              <b>Montagem do Website</b>: Desenvolvo websites nas principais
              plataformas de e-commerce do Brasil, e que oferecem uma interface
              de usuário intuitiva e atraente, refletindo a identidade da sua
              marca.
            </ListItem>
            <Divider />
            <ListItem>
              <b>Cadastro de Produtos</b>: Cadastro e otimizo a apresentação de
              seus produtos, incluindo descrições detalhadas, dados para SEO e
              informações essenciais para melhorar a experiência do cliente.
            </ListItem>
            <Divider />
            <ListItem>
              <b>Integrações de Frete</b>: realizo a configuração das suas
              planilhas de frete ou de sua integração de frete junto com o
              E-commerce
            </ListItem>
            <Divider />
            <ListItem>
              <b>Integrações de Pagamento (Checkout)</b>: Facilito o processo de
              pagamento para os seus clientes, integrando gateways de pagamento
              seguros, garantindo transações seguras e eficientes.
            </ListItem>
            <Divider />
            <ListItem>
              <b>SEO (Otimização para Mecanismos de Busca)</b>: Melhoro a
              visibilidade do seu site nos mecanismos de busca, ajudando você a
              alcançar uma posição mais alta nos resultados de pesquisa e atrair
              tráfego qualificado.
            </ListItem>
            <Divider />
            <ListItem>
              <b>Integração de Produtos com Marketplaces e Mídias Sociais</b>:
              Expandimos sua presença online ao integrar seus produtos com
              marketplaces populares e plataformas de mídias sociais, ampliando
              sua visibilidade e alcance.
            </ListItem>
          </UnorderedList>
          <Text>
            Esses serviços abrangentes asseguram que sua operação de e-commerce
            seja eficaz, eficiente e orientada para o sucesso.
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

export default ConsultingService;
