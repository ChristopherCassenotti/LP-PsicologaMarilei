import { Container } from "../../components/layout/Container";
import { Button } from "../../components/ui/Button";
import { LeafDecoration } from "../../components/ui/LeafDecoration";
import { Reveal, RevealGroup, RevealItem } from "../../components/ui/ScrollReveal";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { specialties } from "../../data/content";

export function Specialties() {
  return (
    <section
      id="especialidades"
      aria-labelledby="especialidades-title"
      className="relative overflow-hidden bg-ivory-100 py-24 lg:py-32"
    >
      <LeafDecoration className="absolute -right-10 top-12 h-[370px] w-[260px] -scale-x-100 text-olive-700 opacity-20" />

      <Container className="relative">
        <Reveal>
          <SectionHeading
          id="especialidades-title"
          eyebrow="Especialidades clínicas"
          title="Atendimento psicológico especializado para adultos e crianças"
          description="Desenvolvendo planos terapêuticos individualizados de acordo com a história, as necessidades clínicas e a fase de desenvolvimento de cada paciente."
          centered
          />
        </Reveal>

        <RevealGroup as="ul" className="mt-14 grid gap-4 md:grid-cols-2">
          {specialties.map((item, index) => (
            <RevealItem
              as="li"
              key={item}
              className="group flex min-h-[108px] items-center gap-5 rounded-2xl border border-olive-900/10 bg-white/90 p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:border-gold-500/35 motion-reduce:transform-none"
            >
              <span
                aria-hidden="true"
                className="font-display text-4xl font-semibold text-gold-600/55"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span aria-hidden="true" className="h-10 w-px bg-gold-500/30" />
              <span className="font-semibold leading-7 text-lg text-olive-900">
                {item}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-10 text-center" delay={0.1}>
          <Button href="#atendimento">Conheça o atendimento</Button>
        </Reveal>
      </Container>
    </section>
  );
}
