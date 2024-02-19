import { Box, Center, Image, useMediaQuery } from "@chakra-ui/react";
import { LandingPageHeader } from "../../components/LandingPageHeader/LandingPageHeader";

export const LandingPageExample = () => {
    const SMALL_SCREEN_BREAKPOINT = "480px";

    const [isSmallScreen] = useMediaQuery(`(max-width: ${SMALL_SCREEN_BREAKPOINT})`);

    return (
        <>
            <LandingPageHeader />
            <Box>
                <Image
                    src={isSmallScreen ? "../../assets/images/lp_banner_mobile.png" : "../../assets/images/lp_banner.png"}
                    alt="Banner principal apresentando uma pessoa mexendo no celular e acima o texto Transformando Ideias em Resultados"
                />
            </Box>
            <Center width="100%" bgColor="#F1F3FE">
                a
            </Center>
        </>
    );
};
