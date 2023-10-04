import { Header } from "../../components/Header/Header";
import { Author } from "../../components/Author/Author";
import { About } from "../../components/About/About";
import { Education } from "../../components/Education/Education";
import { Experiences } from "../../components/Experiences/Experiences";
import { Skills } from "../../components/Skills/Skills";

import "./style.css";

export const Curriculum = () => {
  return (
    <>
      <Header />
      <Author />
      <hr className="main-rule" />
      <About />
      <hr className="main-rule" />
      <Experiences />
      <hr className="main-rule" />
      <Education />
      <hr className="main-rule" />
      <Skills />
    </>
  );
};
