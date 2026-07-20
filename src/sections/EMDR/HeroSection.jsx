import { CalendarDays, Check, HeartHandshake } from "lucide-react";

import { Container } from "../../components/layout/Container";
import { Button } from "../../components/ui/Button";
import { Eyebrow } from "../../components/ui/Eyebrow";
import { FlowerDivider } from "../../components/ui/FlowerDivider";
import { LeafDecoration } from "../../components/ui/LeafDecoration";
import { Reveal } from "../../components/ui/ScrollReveal";

import { emdrInfantilWhatsappMessage } from "../../data/data";
import { createWhatsAppUrl } from "../../utils/whatsapp";

import heroEmdrInfantil from "../../assets/marilei-krauss.webp";

export function HeroSection() {
  const whatsappUrl = createWhatsAppUrl(emdrInfantilWhatsappMessage);

  return (
    <section
      aria-labelledby="emdr-infantil-title"
      className="relative isolate border-t border-gold-500/15 bg-ivory-50"
    >
      <LeafDecoration className="pointer-events-none absolute -left-12 top-32 h-80 text-olive-700/10" />

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-[45%] hidden h-[430px] w-[430px] rounded-full border border-gold-500/15 lg:block"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-24 left-[48%] hidden h-[390px] w-[390px] rounded-full border border-gold-500/10 lg:block"
      />

      <Container className="relative flex min-h-[760px] justify-center gap-12 py-16 lg:gap-0 lg:py-0">
        <Reveal
          className="relative z-10 flex flex-col lg:py-24 lg:pr-14 gap-4 text-center"
          distance={20}
          duration={0.78}
          amount={0.5}
        >
          <Eyebrow>Psicologia infantil e EMDR</Eyebrow>
          <div className="w-full flex flex-col gap-2 items-center">
            <h1
              id="emdr-infantil-title"
              className="font-display text-7xl font-semibold leading-[0.98] text-olive-900 sm:text-6xl lg:text-[4.75rem]"
            >
              Atendimento psicológico <br />
              infantil <span className="text-clay-600">com EMDR</span>
            </h1>

            <p className="max-w-5xl text-xl leading-8 text-olive-900/75">
              Um cuidado especializado para ajudar crianças a compreender e
              processar experiências emocionalmente difíceis, respeitando sua
              idade, seu desenvolvimento e sua maneira particular de se
              expressar.
            </p>

            <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <Button
                href={whatsappUrl}
                icon={CalendarDays}
                ariaLabel="Agendar uma conversa sobre atendimento psicológico infantil"
              >
                Agendar uma conversa
              </Button>

              <p className="inline-flex items-center gap-2 text-sm font-semibold text-olive-900/75">
                <Check
                  aria-hidden="true"
                  size={18}
                  className="shrink-0 text-clay-600"
                  strokeWidth={2}
                />
                Atendimentos particulares e Unimed.
              </p>
            </div>

            <Reveal
              className="mt-9 max-w-2xl rounded-2xl border border-gold-500/15 bg-white/90 p-5 shadow-card sm:p-6"
              delay={0.12}
              distance={18}
              amount={0.45}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold-500/35 bg-ivory-50 text-clay-600">
                  <HeartHandshake
                    aria-hidden="true"
                    size={24}
                    strokeWidth={1.5}
                  />
                </div>

                <p className="text-lg leading-7 text-olive-900/80">
                  O atendimento é conduzido de forma acolhedora, individualizada
                  e compatível com a etapa de desenvolvimento da criança.
                </p>
              </div>
            </Reveal>
          </div>
        </Reveal>

        <Reveal
          className="relative min-h-[520px] overflow-hidden rounded-[2rem] lg:min-h-full lg:rounded-none"
          direction="left"
          distance={34}
          delay={0.08}
          amount={0.45}
        >
          <div
            aria-hidden="true"
            className="absolute inset-y-0 -left-1 z-10 hidden w-32 rounded-r-[50%] bg-ivory-50 lg:block"
          />

          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-10 z-10 hidden w-5 rounded-[50%] bg-gold-400/35 lg:block"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-olive-950/30 via-transparent to-transparent"
          />

          <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/40 bg-white/90 p-5 shadow-soft backdrop-blur-sm sm:left-auto sm:max-w-sm">
            <p className="font-display text-2xl font-semibold leading-tight text-olive-900">
              Um espaço seguro para compreender, cuidar e desenvolver novos
              recursos emocionais.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
