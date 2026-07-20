import marileiPhoto from "../../assets/marilei-krauss.webp";
import { Container } from "../../components/layout/Container";
import { Button } from "../../components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "../../components/ui/ScrollReveal";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { professionalHighlights } from "../../data/content";

export function AboutSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-title"
      className="overflow-hidden bg-ivory-100 py-24 lg:py-32"
    >
      <Container className="grid gap-16 lg:grid-cols-[.84fr_1.16fr] lg:items-center">
        <Reveal className="relative" direction="right" distance={34}>
          <div
            aria-hidden="true"
            className="absolute -left-8 -top-8 h-40 w-40 rounded-full border-[28px] border-gold-500/10"
          />
          <div className="relative overflow-hidden rounded-[9rem_2rem_9rem_2rem] shadow-soft">
            <img
              src={marileiPhoto}
              width="851"
              height="1280"
              loading="lazy"
              alt="Retrato profissional da psicóloga Marilei Krauss"
              className="aspect-[4/5] h-full w-full object-cover object-[48%_34%]"
            />
          </div>
          <div className="absolute -bottom-6 right-0 rounded-2xl bg-olive-900 px-6 py-5 text-ivory-50 shadow-soft sm:-right-6">
            <p className="font-display text-4xl font-semibold">CRP 08/13115</p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gold-400">
              Psicóloga clínica
            </p>
          </div>
        </Reveal>

        <Reveal direction="left" distance={30} delay={0.08}>
          <SectionHeading
            id="sobre-title"
            eyebrow="Sobre Marilei Krauss"
            title="Mais de 20 anos dedicados à compreensão do sofrimento humano."
          />

          <div className="mt-8 space-y-5 text-xl leading-8 text-olive-900/80">
            <p>
              Sou psicóloga clínica, especialista em Saúde Mental e
              Desenvolvimento Humano e terapeuta certificada em EMDR.
            </p>
            <p>
              Desde 2008, atuo em consultório particular realizando psicoterapia
              clínica, supervisão profissional e coordenação técnica.
            </p>
            <p>
              Também sou fundadora do IPSIC — Instituto de Psicologia Clínica e
              Estudos Terapêuticos, espaço dedicado ao atendimento psicológico
              especializado e ao desenvolvimento profissional de psicólogos.
            </p>
            <p>
              Minha trajetória também inclui experiência como professora
              universitária e formação continuada em Psicologia Clínica,
              psicotraumatologia, EMDR e Terapia Comportamental Dialética.
            </p>
          </div>

          <RevealGroup
            as="dl"
            className="mt-9 grid gap-3 sm:grid-cols-3"
            stagger={0.06}
          >
            {professionalHighlights.map((item) => (
              <RevealItem
                key={item.value}
                className="rounded-xl border border-olive-900/10 bg-white/80 p-4"
              >
                <dt className="font-display text-4xl font-semibold text-clay-700">
                  {item.value}
                </dt>
                <dd className="mt-1 text-sm font-semibold leading-5 text-olive-900/75">
                  {item.label}
                </dd>
              </RevealItem>
            ))}
          </RevealGroup>

          <Button href="#atendimento" variant="secondary" className="mt-9">
            Conheça minha trajetória
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
