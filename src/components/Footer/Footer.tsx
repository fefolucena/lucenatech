import { Center, Image } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h3>Lucena Tecnologia</h3>
        <p>Transformando ideias em resultados.</p>
        <a href="https://github.com/fefolucena/lucenatech">
          <Image
            borderRadius="full"
            boxSize="70px"
            src="../../assets/images/github.svg"
            alt="Github link"
          />
        </a>
      </div>
      <div className="footer-bottom">
        <Center><p>copyright &copy; Lucena Tecnologia - CNPJ: 49.831.347/0001-75</p></Center>
      </div>
    </footer>
  );
};
