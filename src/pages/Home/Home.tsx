import { Box, Image, useMediaQuery } from "@chakra-ui/react";
import { Header } from "../../components/Header/Header";
import { ProvidedServices } from "../../components/ProvidedServices/ProvidedServices";
import { ServiceDetails } from "../../components/ServicesDetails/ServicesDetails";
import { Footer } from "../../components/Footer/Footer";

export const Home = () => {
  const SMALL_SCREEN_BREAKPOINT = "480px";

  const [isSmallScreen] = useMediaQuery(`(max-width: ${SMALL_SCREEN_BREAKPOINT})`);

  return (
    <>
      <Header />
      <Box>
        <Image
          src={isSmallScreen ? "../../assets/images/banner_mobile.png" : "../../assets/images/banner.png"}
          alt="Banner principal apresentando uma pessoa mexendo no celular e acima o texto Transformando Ideias em Resultados"
        />
      </Box>
      <ProvidedServices />
      <ServiceDetails />
      <Footer />
    </>
  );
};
