import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold">
            Let’s Build Something Together
          </h2>

          <p className="mt-4 text-[var(--color-muted)]">
            Open to full-time opportunities, freelance work, and collaborations.
          </p>

          {/* CONTACT CARDS */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            
            {/* EMAIL */}
            <a
              href="mailto:ashishkashyap024@gmail.com"
              className="p-6 rounded-xl transition
                bg-(--color-surface)
                hover:bg-(--color-primary)
                hover:text-white
                hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]"
            >
              <div className="flex flex-col items-center gap-3">
                <MdEmail size={28} />
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm">ashishkashyap024@gmail.com"</p>
              </div>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://in.linkedin.com/in/ashish-kashyap-b40917229"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl transition
                bg-(--color-surface)
                hover:bg-(--color-primary)
                hover:text-white
                hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]"
            >
              <div className="flex flex-col items-center gap-3">
                <FaLinkedin size={28} />
                <h3 className="font-semibold">LinkedIn</h3>
                <p className="text-sm">Connect with me</p>
              </div>
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/Ashish1809200"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl transition
                bg-(--color-surface)
                hover:bg-(--color-primary)
                hover:text-white
                hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]"
            >
              <div className="flex flex-col items-center gap-3">
                <FaGithub size={28} />
                <h3 className="font-semibold">GitHub</h3>
                <p className="text-sm">View my projects</p>
              </div>
            </a>

          </div>

          {/* CTA BUTTON */}
          <div className="mt-10">
            <a href="mailto:ashishkashyap024@gmail.com">
              <Button>Send Message</Button>
            </a>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Contact;