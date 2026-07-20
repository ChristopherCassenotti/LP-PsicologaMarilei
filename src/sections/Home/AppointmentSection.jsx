import {
  CalendarDays,
  Clock,
  FileText,
  Heart,
  MessageCircle,
  UserRound,
  Video,
} from "lucide-react";

import { Container } from "../../components/layout/Container";
import { Button } from "../../components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "../../components/ui/ScrollReveal";
import { SectionHeading } from "../../components/ui/SectionHeading";
import {
  appointmentInfo,
  appointmentSteps,
  whatsappMessages,
} from "../../data/content";
import { createWhatsAppUrl } from "../../utils/whatsapp";
import { WhatsAppIcon } from "../../components/icons/WhatsAppIcon";

const appointmentIcons = {
  adult: UserRound,
  online: Video,
  duration: Clock,
  private: Heart,
  reimbursement: FileText,
};

export function AppointmentSection() {
  return (
    <section
      id="atendimento"
      aria-labelledby="atendimento-title"
      className="bg-white py-24 lg:py-32"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_.92fr]">
          <Reveal>
            <SectionHeading
              id="atendimento-title"
              eyebrow="Como funciona o atendimento"
              title="O primeiro encontro é dedicado à compreensão da sua história."
              description="Na primeira consulta, conversaremos sobre as dificuldades que motivaram a busca por atendimento, seu histórico de saúde, experiências importantes, sintomas atuais e expectativas em relação ao tratamento."
            />
            <p className="mt-5 text-base leading-8 text-olive-900/80">
              A partir dessa avaliação inicial, construiremos um plano
              terapêutico individualizado.
            </p>

            <RevealGroup as="ol" className="mt-9 grid gap-4" stagger={0.07}>
              {appointmentSteps.map((step) => (
                <RevealItem
                  as="li"
                  key={step.number}
                  className="flex gap-5 rounded-2xl border border-olive-900/10 bg-ivory-100 p-5"
                >
                  <span
                    aria-hidden="true"
                    className="font-display text-4xl font-semibold text-gold-600/60"
                  >
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-display text-3xl font-semibold text-olive-900">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-base leading-6 text-olive-900/75">
                      {step.text}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </Reveal>

          <Reveal
            as="aside"
            aria-labelledby="consultas-title"
            className="rounded-[2.5rem] bg-olive-900 p-7 text-ivory-50 shadow-soft sm:p-10"
            direction="left"
            distance={34}
            delay={0.08}
          >
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-gold-400">
                <CalendarDays aria-hidden="true" focusable="false" size={28} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
                  Informações
                </p>
                <h3
                  id="consultas-title"
                  className="font-display text-3xl font-semibold"
                >
                  Sobre as consultas
                </h3>
              </div>
            </div>

            <RevealGroup as="ul" className="mt-8 grid gap-3" stagger={0.06}>
              {appointmentInfo.map((item) => {
                const Icon = appointmentIcons[item.type];

                return (
                  <RevealItem
                    as="li"
                    key={item.text}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.07] p-4"
                  >
                    <Icon
                      aria-hidden="true"
                      focusable="false"
                      className="shrink-0 text-gold-400"
                      size={20}
                    />
                    <span className="text-sm font-semibold leading-6 text-ivory-100/90">
                      {item.text}
                    </span>
                  </RevealItem>
                );
              })}
            </RevealGroup>

            <Button
              href={createWhatsAppUrl(whatsappMessages.information)}
              variant="light"
              icon={WhatsAppIcon}
              ariaLabel="Solicitar informações sobre a consulta pelo WhatsApp"
              className="mt-8 w-full"
            >
              Saiba como funciona a consulta
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
