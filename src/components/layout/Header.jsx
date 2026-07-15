import { useEffect, useRef, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";

import logoHorizontal from "../../assets/logo-horizontal.png";
import { navItems, whatsappMessages } from "../../data/content";
import { createWhatsAppUrl } from "../../utils/whatsapp";
import { Button } from "../ui/Button";
import { Container } from "./Container";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const firstMobileLinkRef = useRef(null);

  const closeMenu = ({ restoreFocus = false } = {}) => {
    setIsMenuOpen(false);

    if (restoreFocus) {
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  };

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.requestAnimationFrame(() => firstMobileLinkRef.current?.focus());

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu({ restoreFocus: true });
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-olive-900/10 bg-ivory-100/95 shadow-[0_4px_18px_rgba(55,45,34,.07)] backdrop-blur-xl">
      <Container className="flex h-[92px] items-center justify-between">
        <a
          href="#inicio"
          aria-label="Ir para o início do site de Marilei Krauss"
          className="shrink-0 rounded-md"
        >
          <img
            src={logoHorizontal}
            width="941"
            height="170"
            alt="Marilei Krauss, psicóloga"
            className="h-[58px] w-auto object-contain sm:h-[64px]"
          />
        </a>

        <nav aria-label="Navegação principal" className="hidden xl:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative rounded-sm py-3 text-[14px] font-semibold text-olive-900 transition-colors hover:text-clay-700 focus-visible:text-clay-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          href={createWhatsAppUrl(whatsappMessages.schedule)}
          icon={WhatsAppIcon}
          ariaLabel="Agendar consulta pelo WhatsApp"
          className="hidden xl:inline-flex"
        >
          Agendar consulta
        </Button>

        <button
          ref={menuButtonRef}
          type="button"
          aria-label={
            isMenuOpen ? "Fechar menu principal" : "Abrir menu principal"
          }
          aria-expanded={isMenuOpen}
          aria-controls="menu-mobile"
          onClick={() => setIsMenuOpen((value) => !value)}
          className="grid min-h-12 min-w-12 place-items-center rounded-full border border-olive-900/20 text-olive-900 transition-colors hover:bg-olive-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 xl:hidden"
        >
          {isMenuOpen ? (
            <X aria-hidden="true" focusable="false" />
          ) : (
            <Menu aria-hidden="true" focusable="false" />
          )}
        </button>
      </Container>

      {isMenuOpen && (
        <div
          id="menu-mobile"
          className="border-t border-olive-900/10 bg-ivory-50 shadow-soft xl:hidden"
        >
          <Container className="max-h-[calc(100dvh-92px)] overflow-y-auto pb-6 pt-4">
            <nav aria-label="Navegação principal no celular">
              <ul className="grid gap-1">
                {navItems.map((item, index) => (
                  <li key={item.href}>
                    <a
                      ref={index === 0 ? firstMobileLinkRef : undefined}
                      href={item.href}
                      onClick={() => closeMenu()}
                      className="block rounded-lg px-4 py-3 font-semibold text-olive-900 transition-colors hover:bg-ivory-200 focus-visible:bg-ivory-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <Button
                href={createWhatsAppUrl(whatsappMessages.schedule)}
                icon={WhatsAppIcon}
                ariaLabel="Agendar consulta pelo WhatsApp"
                className="mt-3 w-full"
                onClick={() => closeMenu()}
              >
                Agendar consulta
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
