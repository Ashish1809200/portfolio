import { motion } from "framer-motion";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

const About = () => {
  return (
    <Section id="about">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold">About Me</h2>

          <p className="mt-6 text-(--color-muted) leading-relaxed">
            I am a Full Stack .NET Developer with hands-on experience in
            building scalable, secure, and maintainable web applications using
            ASP.NET Core and modern frontend frameworks like React and Angular.
          </p>

          <p className="mt-4 text-(--color-muted)">
            I specialize in Clean Architecture, REST API design, authentication
            systems, and building production-ready applications.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
};

export default About;
