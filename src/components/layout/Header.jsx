import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { WhatsAppIcon } from "../icons/WhatsAppIcon";

import logoHorizontal from "../../assets/logo-horizontal.webp";
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
    <header className="sticky top-0 z-50 border-b border-olive-900/10 bg-ivory-100/95 shadow-[0_4px_18px_rgba(55,45,34,0.07)] backdrop-blur-xl">
      <Container className="flex h-[78px] items-center justify-between gap-4 min-[1300px]:h-[88px]">
        <a
          href="#inicio"
          aria-label="Ir para o início do site de Marilei Krauss"
          className="shrink-0 rounded-md "
        >
          <img
            src={logoHorizontal}
            width="941"
            height="170"
            alt="Marilei Krauss, psicóloga"
            className="
            h-[48px] w-auto object-contain
            sm:h-[54px]
            min-[1300px]:h-[52px]
            min-[1450px]:h-[58px]
          "
          />
        </a>

        <nav
          aria-label="Navegação principal"
          className=" hidden  min-[1300px]:block "
        >
          <ul
            className="
            flex items-center
            min-[1300px]:gap-4
            min-[1400px]:gap-5
            min-[1500px]:gap-7
          "
          >
            {navItems.map((item) => (
              <li key={item.href} className="shrink-0">
                <a
                  href={item.href}
                  className="
                  block whitespace-nowrap rounded-sm py-3
                  text-[14px] font-semibold text-olive-900
                  transition-colors
                  hover:text-clay-700
                  focus-visible:text-clay-700
                  min-[1400px]:text-[14px]
                  min-[1500px]:text-[14px]
                "
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
          className="
          hidden shrink-0 whitespace-nowrap
          min-[1300px]:inline-flex
          min-[1300px]:px-4
          min-[1300px]:text-[12px]
          min-[1400px]:px-5
          min-[1400px]:text-[13px]
          min-[1500px]:px-6
        "
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
          className="
          ml-auto grid min-h-12 min-w-12 place-items-center
          rounded-full border border-olive-900/20
          text-olive-900 transition-colors
          hover:bg-olive-900 hover:text-white
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-gold-500
          focus-visible:ring-offset-2
          min-[1300px]:hidden
        "
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
          className="
          border-t border-olive-900/10
          bg-ivory-50 shadow-soft
          min-[1300px]:hidden
        "
        >
          <Container className="max-h-[calc(100dvh-78px)] overflow-y-auto pb-6 pt-4">
            <nav aria-label="Navegação principal no celular">
              <ul className="grid gap-1">
                {navItems.map((item, index) => (
                  <li key={item.href}>
                    <a
                      ref={index === 0 ? firstMobileLinkRef : undefined}
                      href={item.href}
                      onClick={() => closeMenu()}
                      className="
                      block rounded-lg px-4 py-3
                      font-semibold text-olive-900
                      transition-colors
                      hover:bg-ivory-200
                      focus-visible:bg-ivory-200
                    "
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
