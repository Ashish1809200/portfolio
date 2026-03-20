import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="text-center max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold"
        >
          Building Scalable Web Applications with .NET
        </motion.h1>
        <motion.p className="mt-6 text-(--color-muted)">
          Full Stack Developer specializing in ASP.NET Core
        </motion.p>

        <div className="mt-8 flex justify-center gap-4">
          <Button>View Projects</Button>
          <a
            href="/Ashish_Kashyap_Resume.pdf"
            download="Ashish_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                        bg-(--color-surface)
                        text-(--color-text)
                        border border-(--color-border)
                        hover:bg-(--color-primary)
                        hover:text-white
                        transition"
          >
            <FaDownload />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
