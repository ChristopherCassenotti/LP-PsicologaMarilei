import { MessageCircle } from "lucide-react";

import { Container } from "../components/layout/Container";
import { Button } from "../components/ui/Button";
import { Eyebrow } from "../components/ui/Eyebrow";
import { LeafDecoration } from "../components/ui/LeafDecoration";
import { whatsappMessages } from "../data/content";
import { createWhatsAppUrl } from "../utils/whatsapp";
import { WhatsAppIcon } from "../components/icons/WhatsAppIcon";

export function FinalCta() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="relative overflow-hidden bg-clay-600 py-24"
    >
      <LeafDecoration className="absolute -left-14 -top-20 h-[390px] w-[270px] rotate-[18deg] text-white opacity-10" />
      <LeafDecoration className="absolute -bottom-24 -right-12 h-[390px] w-[270px] -scale-x-100 text-white opacity-10" />

      <Container className="relative text-center">
        <div className="mx-auto max-w-5xl">
          <Eyebrow light centered>
            Chamada final
          </Eyebrow>

          <h2
            id="contato-title"
            className="font-display text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl"
          >
            Dar o primeiro passo nem sempre é fácil.
          </h2>

          <div className="mx-auto mt-7 max-w-3xl space-y-4 text-base leading-8 text-white/90 sm:text-lg">
            <p>
              Buscar ajuda psicológica é uma decisão importante. Esse primeiro
              contato acontece em um ambiente de respeito, acolhimento e
              confidencialidade.
            </p>
            <p>
              Se você busca um tratamento psicológico especializado,
              individualizado e fundamentado em evidências, será um prazer
              acompanhar você nesse processo.
            </p>
          </div>

          <Button
            href={createWhatsAppUrl(whatsappMessages.schedule)}
            variant="light"
            icon={WhatsAppIcon}
            ariaLabel="Agendar consulta pelo WhatsApp"
            className="mt-9"
          >
            Agendar consulta pelo WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  );
}
