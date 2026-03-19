import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import { Button } from "../components/ui/Button";

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold">Let’s Build Something Together</h2>

          <p className="mt-4 text-(--color-muted)">
            Open to full-time opportunities and freelance projects.
          </p>

          <div className="mt-6">
            <Button>Contact Me</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
