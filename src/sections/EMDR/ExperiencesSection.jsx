import { Baby, Check, ShieldCheck } from "lucide-react";

import { Container } from "../../components/layout/Container";
import { Reveal, RevealGroup, RevealItem } from "../../components/ui/ScrollReveal";
import { SectionHeading } from "../../components/ui/SectionHeading";

import { situations } from "../../data/data";

export function ExperiencesSection() {
  return (
    <section
      aria-labelledby="experiencias-infantis-title"
      className="relative bg-white py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-32">
            <SectionHeading
              id="experiencias-infantis-title"
              eyebrow="Um olhar além dos sintomas"
              title="Quando uma experiência continua afetando a criança"
            />

            <div className="mt-7 space-y-5 text-xl leading-8 text-olive-900/75">
              <p>
                Nem sempre as crianças conseguem explicar com palavras aquilo
                que estão sentindo. Algumas experiências podem se manifestar por
                meio de mudanças no comportamento, medos intensos,
                irritabilidade, dificuldades escolares, alterações no sono ou
                sofrimento emocional persistente.
              </p>

              <p>
                O atendimento psicológico busca compreender o que está
                acontecendo além dos sintomas, considerando a história da
                criança, seu ambiente familiar e a forma como ela vivenciou
                determinadas experiências.
              </p>
            </div>
          </Reveal>

          <Reveal
            className="rounded-[2rem] border border-gold-500/20 bg-ivory-100/55 p-5 sm:p-8 lg:p-10"
            direction="left"
            distance={34}
            delay={0.08}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold-500/50 bg-white text-clay-600">
                <Baby aria-hidden="true" size={27} strokeWidth={1.5} />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-gold-600">
                  Avaliação infantil
                </span>

                <h3 className="mt-2 font-display text-3xl font-semibold leading-tight text-olive-900">
                  Situações que podem ser consideradas
                </h3>
              </div>
            </div>

            <RevealGroup
              className="mt-8 grid gap-4 sm:grid-cols-2"
              stagger={0.06}
            >
              {situations.map((situation) => (
                <RevealItem
                  key={situation}
                  className="flex min-h-20 items-center gap-4 rounded-xl border border-olive-900/10 bg-white px-5 py-4 shadow-card"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-clay-600">
                    <Check aria-hidden="true" size={17} strokeWidth={2} />
                  </span>

                  <span className="text-base font-semibold leading-6 text-olive-900">
                    {situation}
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal className="mt-7 rounded-xl border border-gold-500/35 bg-gold-400/10 px-5 py-4">
              <p className="flex items-start gap-3 text-base leading-6 text-olive-900/75">
                <ShieldCheck
                  aria-hidden="true"
                  size={20}
                  className="mt-0.5 shrink-0 text-clay-600"
                  strokeWidth={1.8}
                />

                <span>
                  A indicação do EMDR é definida após avaliação clínica
                  individualizada.
                </span>
              </p>
            </Reveal>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
