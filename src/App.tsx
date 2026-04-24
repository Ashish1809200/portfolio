import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { ThemeProvider } from "./context/ThemeProvider";
import Navbar from "./components/Navbar";
import ChatBot from "./components/ui/ChatBot";
import { Analytics } from "@vercel/analytics/react";

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
      <Analytics />
    </ThemeProvider>
  );
}

export default App;
