import { motion } from "framer-motion";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import { SiDotnet, SiReact, SiAngular, SiTypescript } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";

const skillGroups = [
  {
    title: "Backend",
    skills: [
      { name: "ASP.NET Core", icon: SiDotnet },
      { name: "Web API", icon: SiDotnet },
      { name: "Entity Framework", icon: SiDotnet },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Angular", icon: SiAngular },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    title: "Database & Tools",
    skills: [{ name: "SQL Server", icon: PiFileSql }],
  },
];

const Skills = () => {
  return (
    <Section id="skills">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold">Skills</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xl font-semibold mb-4 text-(--color-primary)">
                  {group.title}
                </h3>

                <div className="flex flex-col gap-4">
                  {group.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-4 p-4 rounded-xl transition
                          bg-(--color-surface)
                          hover:bg-(--color-primary)
                          hover:text-white
                          hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]"
                      >
                        <Icon size={22} />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Skills;
