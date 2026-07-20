import { Check } from "lucide-react";

import { Container } from "../../components/layout/Container";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "../../components/ui/ScrollReveal";
import { traumaIndications } from "../../data/content";

export function TraumaSection() {
  return (
    <section
      aria-labelledby="trauma-title"
      className="relative overflow-hidden bg-olive-900 py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-400/10"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-400/10"
      />

      <Container className="relative grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
        <Reveal className="lg:sticky lg:top-32">
          <Eyebrow light>Tratamento especializado em trauma e EMDR</Eyebrow>

          <h2
            id="trauma-title"
            className="font-display text-4xl font-semibold leading-[1.04] text-ivory-50 sm:text-5xl lg:text-6xl"
          >
            Experiências do passado podem continuar influenciando o presente.
          </h2>

          <div className="mt-8 space-y-5 text-lg leading-8 text-ivory-100/85">
            <p>
              O trauma pode afetar emoções, pensamentos, comportamentos,
              autoestima e relacionamentos mesmo muitos anos após a experiência
              vivida.
            </p>
            <p>
              A Terapia EMDR é uma abordagem baseada em evidências, reconhecida
              internacionalmente e utilizada no tratamento de traumas simples e
              complexos.
            </p>
            <p>
              O tratamento busca favorecer o reprocessamento adaptativo de
              experiências traumáticas, contribuindo para a redução do
              sofrimento emocional e para a recuperação da qualidade de vida.
            </p>
          </div>
        </Reveal>

        <Reveal
          className="rounded-[2.5rem] border border-gold-400/20 bg-white/[0.07] p-6 backdrop-blur-sm sm:p-9"
          direction="left"
          distance={34}
          delay={0.08}
        >
          <div className="mb-8 flex items-center gap-5">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full border-2 border-gold-400/40 text-gold-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-clipboard-heart"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M5 1.5A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5zm5 0a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5z"
                />
                <path d="M3 1.5h1v1H3a1 1 0 0 0-1 1V14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3.5a1 1 0 0 0-1-1h-1v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2" />
                <path d="M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.31 8 6.982" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-400">
                EMDR
              </p>
              <h3 className="mt-1 font-display text-3xl font-semibold text-ivory-50">
                Pode ser indicado para:
              </h3>
            </div>
          </div>

          <RevealGroup as="ul" className="grid gap-3 sm:grid-cols-2" stagger={0.06}>
            {traumaIndications.map((item) => (
              <RevealItem
                as="li"
                key={item}
                className="flex min-h-[86px] items-center gap-3 rounded-xl border border-white/10 bg-white/[0.07] p-4 text-ivory-100/90"
              >
                <Check
                  aria-hidden="true"
                  focusable="false"
                  className="shrink-0 text-gold-400"
                  size={19}
                />
                <span className="text-base font-medium leading-6">{item}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>
      </Container>
    </section>
  );
}
