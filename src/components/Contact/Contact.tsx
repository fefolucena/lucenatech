import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Button,
  List,
  ListIcon,
  ListItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";

export const Contact = () => {
    
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button colorScheme="teal">Entrar em contato</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>
            Você pode entrar em contato comigo através das seguintes opções:
          </PopoverHeader>
          <PopoverBody>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={EmailIcon} color="green.500" />
                E-mail: cesardelucenajr@gmail.com
              </ListItem>
              <ListItem>
                <ListIcon as={PhoneIcon} color="green.500" />
                Telefone ou Whatsapp: (51) 9 9123-8090
              </ListItem>
            </List>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};
