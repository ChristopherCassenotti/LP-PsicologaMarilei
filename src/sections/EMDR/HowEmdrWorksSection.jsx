import { Container } from "../../components/layout/Container";
import { LeafDecoration } from "../../components/ui/LeafDecoration";
import { Reveal, RevealGroup, RevealItem } from "../../components/ui/ScrollReveal";
import { SectionHeading } from "../../components/ui/SectionHeading";

import { emdrSteps } from "../../data/data";

export function HowEmdrWorksSection() {
  return (
    <section
      aria-labelledby="como-funciona-emdr-title"
      className="relative overflow-hidden bg-olive-900 py-20 text-ivory-50 sm:py-24 lg:py-32"
    >
      <LeafDecoration className="pointer-events-none absolute -left-12 bottom-0 h-96 text-gold-400/10" />

      <LeafDecoration className="pointer-events-none absolute -right-12 top-0 h-80 rotate-180 text-gold-400/10" />

      <div
        aria-hidden="true"
        className="absolute left-[35%] top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-gold-400/10 lg:block"
      />

      <Container className="relative">
        <Reveal>
          <SectionHeading
          id="como-funciona-emdr-title"
          eyebrow="Uma abordagem adaptada à infância"
          title="Como funciona o EMDR com crianças"
          centered
          light
          />
        </Reveal>

        <Reveal
          className="mx-auto mt-7 max-w-5xl space-y-5 text-center text-xl leading-8 text-ivory-100/75"
          delay={0.08}
        >
          <p>
            O EMDR, sigla para{" "}
            <em>Eye Movement Desensitization and Reprocessing</em>, é uma
            abordagem psicoterapêutica voltada ao reprocessamento de
            experiências perturbadoras.
          </p>

          <p>
            No atendimento infantil, o processo é conduzido de maneira
            compatível com a idade e o desenvolvimento da criança, respeitando
            seu ritmo, seus recursos emocionais e sua capacidade de compreensão.
          </p>

          <p>
            Antes de iniciar qualquer intervenção, é realizada uma avaliação
            cuidadosa para compreender a história, as dificuldades atuais e as
            necessidades da criança.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-5 lg:grid-cols-3" stagger={0.08}>
          {emdrSteps.map(({ number, icon: Icon, title, description }) => (
            <RevealItem
              as="article"
              key={number}
              className="group relative overflow-hidden rounded-2xl border border-gold-400/20 bg-white/[0.06] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.09] sm:p-8"
            >
              <span
                aria-hidden="true"
                className="absolute right-6 top-3 font-display text-7xl font-semibold text-gold-400/10"
              >
                {number}
              </span>

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-gold-400/30 bg-white/[0.05] text-gold-400">
                  <Icon aria-hidden="true" size={26} strokeWidth={1.5} />
                </div>

                <h3 className="mt-7 font-display text-4xl font-semibold text-ivory-50">
                  {title}
                </h3>

                <p className="mt-4 text-base leading-7 text-ivory-100/70">
                  {description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
