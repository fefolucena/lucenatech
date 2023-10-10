import { Image } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>Lucena Tecnologia</h3>
        <p>Transformando ideias em resultados.</p>
        <a href="https://github.com/fefolucena">
          <Image
            borderRadius="full"
            boxSize="100px"
            src="../../assets/images/github.svg"
            alt="Github link"
          />
        </a>
      </div>
      <div className="footer-bottom">
        <p>
          copyright &copy; <a href="#">Lucena Tecnologia</a> - CNPJ:
          49.831.347/0001-75
        </p>
      </div>
    </footer>
  );
};
