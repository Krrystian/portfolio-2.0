import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Test } from "./components/Test";
import { Background } from "./components/Background";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Background />
      <Hero />
      <About />
      <Projects />
    </>
  );
}

export default App;
