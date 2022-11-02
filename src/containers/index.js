import FooterMain from "../components/Footer/Footer";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";

export default function Spotlight() {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Contact />
      <FooterMain />
    </>
  );
}
