import {
  BookOpen,
  Brain,
  Heart,
  Quote,
  Sparkles,
  UserRound,
  Users,
} from "lucide-react";

import { Container } from "../../components/layout/Container";
import { Reveal, RevealGroup, RevealItem } from "../../components/ui/ScrollReveal";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { evidencePillars } from "../../data/content";

const pillarIcons = [BookOpen, Brain, UserRound, Heart, Users, Sparkles];

export function ScienceSection() {
  return (
    <section
      aria-labelledby="science-title"
      className="bg-white py-24 lg:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeading
          id="science-title"
          eyebrow="Um tratamento fundamentado na ciência"
          title="Cada pessoa possui uma história única. Cada tratamento também deve ser."
          description="Um tratamento psicológico efetivo exige avaliação clínica cuidadosa, raciocínio diagnóstico e intervenções individualizadas."
          centered
          />
        </Reveal>

        <RevealGroup
          as="ul"
          className="relative mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.07}
        >
          {evidencePillars.map((text, index) => {
            const Icon = pillarIcons[index];

            return (
              <RevealItem
                as="li"
                key={text}
                className="relative overflow-hidden rounded-2xl border border-olive-900/10 bg-ivory-100 p-6"
              >
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-2 font-display text-6xl text-gold-500/35"
                >
                  {index + 1}
                </span>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-white text-gold-600 shadow-card">
                  <Icon
                    aria-hidden="true"
                    focusable="false"
                    size={28}
                    strokeWidth={1.55}
                  />
                </div>
                <h3 className="mt-6 font-display text-3xl font-semibold text-olive-900">
                  {text}
                </h3>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal
          as="blockquote"
          className="mx-auto mt-12 max-w-4xl rounded-[2rem] border border-gold-500/25 bg-gradient-to-br from-ivory-100 to-white p-8 text-center shadow-card sm:p-11"
          scale={0.98}
        >
          <Quote
            aria-hidden="true"
            focusable="false"
            className="mx-auto text-gold-600/55"
            size={38}
            strokeWidth={1.3}
          />
          <p className="mt-5 font-display text-3xl font-semibold leading-tight text-olive-900 sm:text-4xl">
            Meu compromisso é oferecer um atendimento ético, humanizado,
            atualizado e tecnicamente qualificado.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
