import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import type { Project } from "../types";

const Projects = () => {
  return (
    <Section id="projects">
      <Container>
        <h2 className="text-3xl font-bold">Projects</h2>

        <motion.div
          className="grid md:grid-cols-2 gap-6 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {projects.map((project: Project) => (
            <Card key={project.id}>
              <h3 className="text-xl font-semibold">{project.title}</h3>

              <p className="text-(--color-muted) mt-3">{project.description}</p>

              <div className="mt-4 flex gap-2 flex-wrap">
                {project.tech.map((tech: string) => (
                  <span key={tech} className="text-sm text-primary">
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

export default Projects;
