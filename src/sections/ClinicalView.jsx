import { Brain, Check } from "lucide-react";

import { Container } from "../components/layout/Container";
import { Button } from "../components/ui/Button";
import { SectionHeading } from "../components/ui/SectionHeading";
import { clinicalAssessmentItems } from "../data/content";

export function ClinicalView() {
  return (
    <section
      id="como-trabalho"
      aria-labelledby="como-trabalho-title"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      <Container className="grid gap-16 lg:grid-cols-[1fr_.9fr] lg:items-center">
        <div>
          <SectionHeading
            id="como-trabalho-title"
            eyebrow="Um olhar clínico além dos sintomas"
            title="Mais do que tratar sintomas, compreender pessoas."
          />

          <div className="mt-8 space-y-5 text-xl leading-8 text-olive-900/80">
            <p>
              Ansiedade, depressão, traumas, alterações do humor e dificuldades
              nos relacionamentos podem apresentar manifestações semelhantes. No
              entanto, suas origens e os caminhos para o tratamento podem ser
              diferentes.
            </p>
            <p>
              Meu trabalho consiste em compreender profundamente o funcionamento
              psicológico de cada paciente, considerando sua história, seus
              vínculos, suas experiências e seu contexto de vida.
            </p>
            <p>
              A partir dessa compreensão, desenvolvemos um plano terapêutico
              individualizado, fundamentado nas melhores evidências científicas
              disponíveis.
            </p>
          </div>

          <Button href="#atendimento" variant="secondary" className="mt-9">
            Conheça minha forma de trabalhar
          </Button>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-7 rounded-[3rem] border border-gold-500/15"
          />
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ivory-100 p-7 shadow-soft sm:p-10">
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-64 w-64 rounded-full border-[35px] border-gold-500/10"
            />

            <h3 className="font-display text-4xl font-semibold leading-tight text-olive-900">
              Compreender antes de intervir.
            </h3>

            <ul className="mt-8 grid gap-4">
              {clinicalAssessmentItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 rounded-xl border border-olive-900/10 bg-white/85 p-4"
                >
                  <span
                    aria-hidden="true"
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold-500/15 text-gold-600"
                  >
                    <Check size={17} />
                  </span>
                  <span className="text-md font-semibold leading-6 text-olive-900/85">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
