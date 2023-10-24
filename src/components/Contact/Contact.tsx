import {
  CopyIcon,
  EmailIcon,
  ExternalLinkIcon,
  PhoneIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text
} from "@chakra-ui/react";

export const Contact = () => {
  const email = "cesardelucenajr@gmail.com";
  const phone = "51991238090";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=5551991238090&text=Olá!&type=phone_number&app_absent=0",
      "_blank"
    );
  };

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
            <Box>
              <EmailIcon />
              <Text as="span">{" "}E-mail:</Text>
              <Text>
                {email}{" "}
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(email);
                  }}
                  size="sm"
                  backgroundColor="white"
                >
                  <CopyIcon />
                </Button>
                <Button onClick={handleEmailClick} size="sm" backgroundColor="white">
                  <ExternalLinkIcon />
                </Button>
              </Text>
            </Box>
            <Divider />
            <Box>
              <PhoneIcon />
              <Text as="span">{" "}Telefone ou whatsapp:</Text>
                <Text>
                  (51) 9 9123-8090{" "}
                  <Button
                  onClick={() => {
                    navigator.clipboard.writeText(phone);
                  }}
                  size="sm"
                  backgroundColor="white"
                >
                  <CopyIcon />
                </Button>
                <Button onClick={handlePhoneClick} size="sm" backgroundColor="white">
                  <ExternalLinkIcon />
                </Button>
              </Text>
            </Box>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};
