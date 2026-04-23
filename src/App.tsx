import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { ThemeProvider } from "./context/ThemeProvider";
import Navbar from "./components/Navbar";
import ChatBot from "./components/ui/ChatBot";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ChatBot />
    </ThemeProvider>
  );
}

export default App;
