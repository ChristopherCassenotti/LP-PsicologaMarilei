import logoFull from "../../assets/logo-full.png";
import { navItems, whatsappMessages } from "../../data/content";
import { createWhatsAppUrl } from "../../utils/whatsapp";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="bg-olive-900 text-ivory-100/80">
      <Container className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.15fr_0.7fr_1fr] lg:gap-20 lg:py-20">
        {/* Marca */}
        <div>
          <a
            href="#inicio"
            aria-label="Voltar ao início"
            className="inline-block rounded-md"
          >
            <img
              src={logoFull}
              width="1254"
              height="1254"
              loading="lazy"
              alt="Marilei Krauss, psicóloga, CRP 08/13115"
              className="h-auto w-[190px] rounded-xl bg-white/95 p-2"
            />
          </a>

          <p className="mt-6 max-w-md text-sm leading-7 text-ivory-100/75">
            Psicoterapia clínica para adultos, com atendimento presencial e
            on-line, avaliação cuidadosa e tratamento fundamentado em
            evidências.
          </p>

          <p className="mt-5 text-sm font-semibold text-gold-400">
            Marilei Krauss — Psicóloga
          </p>
        </div>

        {/* Navegação */}
        <nav aria-label="Navegação do rodapé">
          <h2 className="text-sm font-bold text-white">Navegação</h2>

          <ul className="mt-6 space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-block rounded-sm text-sm text-ivory-100/75 transition-colors hover:text-gold-400 focus-visible:text-gold-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contato */}
        <div>
          <h2 className="text-sm font-bold text-white">Contato</h2>

          <div className="mt-6 space-y-3 text-sm leading-7 text-ivory-100/75">
            <p>Atendimento psicológico para adultos</p>

            <p>Consultas presenciais e on-line</p>

            <p>CRP 08/13115</p>

            <a
              href={createWhatsAppUrl(whatsappMessages.schedule)}
              aria-label="Agendar consulta pelo WhatsApp"
              className="inline-block rounded-sm font-semibold text-gold-400 transition-colors hover:text-gold-300"
            >
              Agendar consulta pelo WhatsApp
            </a>
          </div>
        </div>
      </Container>

      {/* Barra inferior */}
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-xs text-ivory-100/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Marilei Krauss Psicóloga.</p>

          <p>Todos os direitos reservados.</p>
        </Container>
      </div>
    </footer>
  );
}
