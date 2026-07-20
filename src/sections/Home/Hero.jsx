import {
  Brain,
  CalendarDays,
  Monitor,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import marileiPhoto from "../../assets/marilei-krauss.webp";
import { Container } from "../../components/layout/Container";
import { Button } from "../../components/ui/Button";
import { FlowerDivider } from "../../components/ui/FlowerDivider";
import { LeafDecoration } from "../../components/ui/LeafDecoration";
import { Reveal } from "../../components/ui/ScrollReveal";
import { supportItems, whatsappMessages } from "../../data/content";
import { createWhatsAppUrl } from "../../utils/whatsapp";

const supportIcons = {
  adult: UserRound,
  online: Monitor,
  experience: ShieldCheck,
};

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-ivory-100 lg:min-h-[calc(100svh-92px)]"
    >
      <LeafDecoration className="pointer-events-none absolute -left-8 top-20 h-[360px] w-[250px] text-olive-700 opacity-35" />
      <LeafDecoration className="pointer-events-none absolute -bottom-28 left-[44%] h-[340px] w-[235px] rotate-[34deg] text-gold-500 opacity-30" />

      <div
        aria-hidden="true"
        className="hero-photo-accent absolute inset-y-0 right-0 hidden w-[58%] bg-[#e7d6bb] lg:block"
      />

      <Reveal
        className="hero-photo-shape absolute inset-y-0 right-0 hidden w-[56%] overflow-hidden lg:block"
        direction="left"
        distance={36}
        duration={0.9}
        amount={0.5}
      >
        <img
          src={marileiPhoto}
          width="851"
          height="1280"
          fetchPriority="high"
          alt="Marilei Krauss em seu consultório"
          className="h-full w-full object-cover object-[48%_35%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#5e3d25]/10 via-transparent to-[#26170e]/10"
        />
      </Reveal>

      <Container className="relative z-10 grid lg:min-h-[calc(100svh-92px)] lg:grid-cols-[60%_40%]">
        <div className="flex flex-col justify-center pb-12 pt-16 lg:py-16 lg:pr-16">
          <Reveal distance={20} duration={0.78} amount={0.5}>
            <h1
              id="hero-title"
              className="font-display text-[clamp(3.25rem,5vw,5.15rem)] font-semibold leading-[0.95] tracking-[-0.015em] text-olive-900"
            >
              Precisão diagnóstica.
              <br />
              Tratamento baseado
              <br />
              em evidências.
              <br />
              <span className="text-clay-600">Cuidado individualizado.</span>
            </h1>

            <FlowerDivider />

            <p className="max-w-[580px] text-lg leading-8 text-olive-900/85 sm:text-xl">
              Atendimento psicológico especializado para adultos e crianças, com
              avaliação cuidadosa e tratamento individualizado.
            </p>

            <Button
              href={createWhatsAppUrl(whatsappMessages.schedule)}
              icon={CalendarDays}
              ariaLabel="Agendar consulta pelo WhatsApp"
              className="mt-8"
            >
              Agendar consulta
            </Button>
          </Reveal>

          <Reveal
            className="mt-9 max-w-[730px] rounded-2xl border border-white/80 bg-white/75 px-6 py-6 shadow-soft backdrop-blur sm:flex sm:items-center sm:gap-6"
            delay={0.12}
            distance={18}
            amount={0.45}
          >
            <div className="mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gold-500/30 text-gold-600 sm:mb-0">
              <Brain
                aria-hidden="true"
                focusable="false"
                size={31}
                strokeWidth={1.45}
              />
            </div>
            <p className="text-sm leading-7 text-olive-900/85 sm:text-[15px]">
              Cada pessoa possui uma história única. Por isso, meu compromisso é
              oferecer um atendimento{" "}
              <strong className="font-bold text-olive-900">
                ético, humanizado e tecnicamente qualificado
              </strong>
              , fundamentado na ciência e na escuta.
            </p>
          </Reveal>
        </div>

        <Reveal
          className="relative h-[650px] overflow-hidden lg:hidden"
          direction="left"
          distance={24}
          delay={0.08}
          amount={0.4}
        >
          <div className="absolute inset-x-0 bottom-5 top-0 overflow-hidden rounded-[2.2rem]">
            <img
              src={marileiPhoto}
              width="851"
              height="1280"
              alt="Marilei Krauss em seu consultório"
              className="h-full w-full object-cover object-[48%_35%]"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
