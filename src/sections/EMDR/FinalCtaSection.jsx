import { CalendarDays } from "lucide-react";

import { Container } from "../../components/layout/Container";
import { Button } from "../../components/ui/Button";
import { LeafDecoration } from "../../components/ui/LeafDecoration";
import { Reveal, RevealGroup, RevealItem } from "../../components/ui/ScrollReveal";
import { SectionHeading } from "../../components/ui/SectionHeading";

import {
  emdrInfantilWhatsappMessage,
  serviceInformation,
} from "../../data/data";

import { createWhatsAppUrl } from "../../utils/whatsapp";
import { WhatsAppIcon } from "../../components/icons/WhatsAppIcon";

export function FinalCtaSection() {
  const whatsappUrl = createWhatsAppUrl(emdrInfantilWhatsappMessage);

  return (
    <section
      aria-labelledby="cta-emdr-infantil-title"
      className="relative overflow-hidden bg-clay-600 py-20 text-white sm:py-24 lg:py-28"
    >
      <LeafDecoration className="pointer-events-none absolute -left-12 -top-12 h-80 text-white/10" />

      <LeafDecoration className="pointer-events-none absolute -bottom-20 -right-10 h-80 rotate-180 text-white/10" />

      <Container className="relative">
        <Reveal>
          <SectionHeading
          id="cta-emdr-infantil-title"
          eyebrow="Informações do atendimento"
          title="Cada criança precisa ser compreendida em sua própria história"
          centered
          light
          />
        </Reveal>

        <Reveal
          className="mx-auto mt-7 max-w-5xl space-y-4 text-center text-lg leading-8 text-white/85"
          delay={0.08}
        >
          <p>
            Buscar ajuda psicológica pode ser um passo importante quando o
            sofrimento emocional começa a afetar o desenvolvimento, os
            relacionamentos, a rotina familiar ou a qualidade de vida da
            criança.
          </p>

          <p>
            O primeiro contato permite esclarecer dúvidas, conhecer a demanda e
            avaliar a melhor forma de iniciar o acompanhamento.
          </p>
        </Reveal>

        <RevealGroup
          className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3"
          stagger={0.07}
        >
          {serviceInformation.map(({ icon: Icon, text }) => (
            <RevealItem
              key={text}
              className="flex min-h-32 flex-col items-center justify-center rounded-2xl border border-white/20 bg-white/[0.08] p-5 text-center backdrop-blur-sm"
            >
              <Icon aria-hidden="true" size={25} strokeWidth={1.5} />

              <p className="mt-4 text-base font-semibold leading-6">{text}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mx-auto mt-6 max-w-5xl rounded-2xl border border-white/20 bg-white/[0.08] px-5 py-4">
          <p className="flex items-center justify-center gap-3 text-center text-base leading-6 text-white/90">
            <CalendarDays
              aria-hidden="true"
              size={20}
              className="shrink-0"
              strokeWidth={1.6}
            />
            Atendimento infantil presencial e/ou on-line, conforme avaliação.
          </p>
        </Reveal>

        <Reveal className="mt-9 flex justify-center" delay={0.1}>
          <Button
            href={whatsappUrl}
            variant="light"
            icon={WhatsAppIcon}
            ariaLabel="Conversar pelo WhatsApp sobre atendimento infantil"
          >
            Conversar pelo WhatsApp
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
