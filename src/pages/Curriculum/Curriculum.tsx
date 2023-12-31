import { AboutMe } from "../../components/AboutMe/AboutMe";
import { Author } from "../../components/Author/Author";
import { Education } from "../../components/Education/Education";
import { Experiences } from "../../components/Experiences/Experiences";
import { Header } from "../../components/Header/Header";
import { Skills } from "../../components/Skills/Skills";

import {
  Center,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

export const Curriculum = () => {
  return (
    <>
      <Header />
      <Center flexDirection="column" padding="20px">
        <Author />
      </Center>
      <Center>
        <Center width="80%" margin="5px">
          <Tabs
            isFitted
            align="center"
            variant="enclosed"
            width="90%"
          >
            <TabList mb="1em">
              <Tab>Sobre mim</Tab>
              <Tab>Experiências</Tab>
              <Tab>Educação</Tab>
              <Tab>Habilidades</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <AboutMe />
              </TabPanel>
              <TabPanel>
                <Experiences />
              </TabPanel>
              <TabPanel>
                <Education />
              </TabPanel>
              <TabPanel>
                <Skills />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Center>
      </Center>
    </>
  );
};
