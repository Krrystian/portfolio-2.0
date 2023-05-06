import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Background } from "./components/Background";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { useRef } from "react";

function App() {
  const hero = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);

  const items = [hero, about, skills, project, contact];
  return (
    <>
      <Navbar refers={items} />
      <Background />
      <Hero refers={hero} />
      <About refersA={about} refersB={skills} />
      <Projects refers={project} />
      <Contact refers={contact} />
    </>
  );
}

export default App;
