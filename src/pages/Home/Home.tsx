import { Box, Image } from "@chakra-ui/react";
import { Header } from "../../components/Header/Header";
import { ProvidedServices } from "../../components/ProvidedServices/ProvidedServices";
import { ServiceDetails } from "../../components/ServicesDetails/ServicesDetails";
import { Footer } from "../../components/Footer/Footer";

export const Home = () => {
  return (
    <>
      <Header />
      <Box>
        <Image
          src="../../assets/images/banner-mobile.png"
          alt="Banner principal apresentando uma pessoa mexendo no celular, com um notebook ao lado e uma xícara de café"
          srcSet="../../assets/images/banner_mobile.png 480w, ../../assets/images/banner.png 1024w"
          sizes="(max-width: 480px) 100vw, 1024px"
        />
      </Box>
      <ProvidedServices />
      <ServiceDetails />
      <Footer />
    </>
  );
};
