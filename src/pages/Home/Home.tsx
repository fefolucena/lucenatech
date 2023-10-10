// import "./style.css"

import {
  Box,
  Image,
} from "@chakra-ui/react";
import { Header } from "../../components/Header/Header";
import { ProvidedServices } from "../../components/ProvidedServices/ProvidedServices";
import { ServiceDetails } from "../../components/ServicesDetails/ServicesDetails";
import { Footer } from "../../components/Footer/Footer";

export const Home = () => {
  return (
    <>
      <Header />
      <Box>
        <Image src="../../assets/images/banner.png" alt="" />
      </Box>
      <ProvidedServices />
      <ServiceDetails />
      <Footer />
    </>
  );
};
