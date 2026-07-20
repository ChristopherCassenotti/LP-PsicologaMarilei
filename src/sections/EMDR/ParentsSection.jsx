import { Check, Users } from "lucide-react";

import { Container } from "../../components/layout/Container";
import { Button } from "../../components/ui/Button";
import { LeafDecoration } from "../../components/ui/LeafDecoration";
import { Reveal, RevealGroup, RevealItem } from "../../components/ui/ScrollReveal";
import { SectionHeading } from "../../components/ui/SectionHeading";

import {
  emdrInfantilWhatsappMessage,
  parentsInformation,
} from "../../data/data";

import { createWhatsAppUrl } from "../../utils/whatsapp";
import { WhatsAppIcon } from "../../components/icons/WhatsAppIcon";

export function ParentsSection() {
  const whatsappUrl = createWhatsAppUrl(emdrInfantilWhatsappMessage);

  return (
    <section
      aria-labelledby="responsaveis-title"
      className="relative bg-ivory-50 py-20 sm:py-24 lg:py-32"
    >
      <LeafDecoration className="pointer-events-none absolute -right-16 bottom-0 h-80 rotate-180 text-olive-700/10" />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              id="responsaveis-title"
              eyebrow="Um cuidado construído em conjunto"
              title="A participação dos responsáveis"
            />

            <div className="mt-7 space-y-5 text-xl leading-8 text-olive-900/75">
              <p>
                A participação dos pais ou responsáveis é uma parte importante
                do atendimento infantil. Os encontros iniciais permitem
                compreender a história da criança, seu desenvolvimento, as
                mudanças percebidas e o contexto familiar.
              </p>

              <p>
                Ao longo do acompanhamento, são fornecidas orientações sempre
                que necessário, preservando o espaço terapêutico e o sigilo
                profissional da criança de acordo com sua idade e com as normas
                éticas da Psicologia.
              </p>
            </div>

            <Button
              href={whatsappUrl}
              icon={WhatsAppIcon}
              className="mt-8"
              ariaLabel="Esclarecer dúvidas sobre o atendimento infantil"
            >
              Esclarecer dúvidas sobre o atendimento
            </Button>
          </Reveal>

          <Reveal className="relative" direction="left" distance={34} delay={0.08}>
            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-[2rem] border border-gold-500/25"
            />

            <div className="relative rounded-[2rem] bg-gold-400/10 p-7 sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-clay-600 shadow-card">
                <Users aria-hidden="true" size={28} strokeWidth={1.5} />
              </div>

              <h3 className="mt-7 font-display text-3xl font-semibold leading-tight text-olive-900">
                A família também faz parte do processo de cuidado
              </h3>

              <RevealGroup className="mt-7 space-y-4" stagger={0.06}>
                {parentsInformation.map((item) => (
                  <RevealItem
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-white/80 bg-white/75 px-4 py-4"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-clay-600">
                      <Check aria-hidden="true" size={16} strokeWidth={2} />
                    </span>

                    <p className="text-lg leading-6 text-olive-900/75">
                      {item}
                    </p>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
