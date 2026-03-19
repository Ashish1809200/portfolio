import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";

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
          <Button variant="outline">Contact Me</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
