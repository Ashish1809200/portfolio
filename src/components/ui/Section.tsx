import type { SectionProps } from "../../types";

const Section = ({ children, id }: SectionProps) => {
  return (
    <section id={id} className="py-20">
      {children}
    </section>
  );
};

export default Section;
