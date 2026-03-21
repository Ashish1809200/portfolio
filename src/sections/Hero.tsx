import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";
import { FaDownload } from "react-icons/fa";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Full Stack .NET Developer", "Building Scalable Systems"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className="relative z-0 h-screen flex items-center justify-center overflow-hidden">
      {/* 🔥 Gradient Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute -top-25 left-1/2 -translate-x-1/2 w-150 h-150
          bg-(--color-primary) opacity-20 blur-[120px] rounded-full"
        />
      </div>

      <div className="text-center max-w-3xl px-4">
        {/* 🔥 Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Building Scalable Web Applications with .NET
        </motion.h1>

        {/* 💬 Typing Effect */}
        <motion.p
          className="mt-6 text-lg text-(--color-muted)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {text}
          <Cursor cursorStyle="|" />
        </motion.p>

        {/* 🚀 BUTTON GROUP */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* Primary */}
          <Button
            className="px-6 py-3 min-w-40 rounded-lg
            bg-(--color-primary) text-white
            hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]
            transition"
          >
            View Projects
          </Button>

          {/* Resume */}
          <a
            href="/Ashish_Kashyap_Resume.pdf"
            download="Ashish_Resume.pdf"
            className="inline-flex items-center justify-center gap-2
              px-6 py-3 min-w-40 rounded-lg
              bg-(--color-surface)
              border border-(--color-border)
              text-(--color-text)
              hover:bg-(--color-primary)
              hover:text-white
              transition"
          >
            <FaDownload />
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
