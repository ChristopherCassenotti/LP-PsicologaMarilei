import {
  Baby,
  Clock3,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const emdrInfantilWhatsappMessage =
  "Olá! Gostaria de conversar sobre o atendimento psicológico infantil com EMDR.";

export const situations = [
  "Perdas e luto",
  "Acidentes ou hospitalizações",
  "Separação dos pais",
  "Bullying",
  "Violência ou abuso",
  "Medos e ansiedade",
  "Experiências emocionalmente marcantes",
];

export const emdrSteps = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Avaliação inicial",
    description:
      "Compreensão da história, do desenvolvimento e das dificuldades apresentadas pela criança.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Planejamento terapêutico",
    description:
      "Definição dos objetivos e das estratégias mais adequadas para cada necessidade.",
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "Acompanhamento individualizado",
    description:
      "Condução do processo respeitando o ritmo e a segurança emocional da criança.",
  },
];

export const parentsInformation = [
  "Compreensão da história e do desenvolvimento da criança",
  "Observação das mudanças percebidas na rotina",
  "Orientações aos responsáveis quando necessário",
  "Preservação do vínculo e do espaço terapêutico infantil",
];

export const serviceInformation = [
  {
    icon: Baby,
    text: "Atendimento psicológico infantil",
  },
  {
    icon: HeartHandshake,
    text: "Atendimentos particulares e Unimed",
  },
  {
    icon: Clock3,
    text: "Sessões com duração aproximada de 1 hora",
  },
];