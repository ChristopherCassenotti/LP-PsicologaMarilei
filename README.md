# Marilei Krauss — Psicóloga

Landing page institucional desenvolvida para apresentar o trabalho da psicóloga **Marilei Krauss**, suas áreas de atuação, abordagem clínica e formas de agendamento.

O projeto foi construído com foco em uma experiência acolhedora, responsiva e objetiva, conduzindo o visitante desde a apresentação profissional até o contato pelo WhatsApp.

## Objetivo do projeto

- Apresentar a profissional e sua experiência clínica;
- Explicar a proposta do acompanhamento psicoterapêutico;
- Destacar especialidades e temas trabalhados em terapia;
- Demonstrar a visão clínica e os diferenciais do atendimento;
- Facilitar o agendamento de consultas;
- Direcionar o visitante para o WhatsApp.

## Principais seções

- **Hero:** apresentação inicial, posicionamento profissional e chamada para agendamento;
- **Ciência e psicoterapia:** conteúdo sobre o atendimento fundamentado em evidências;
- **Sobre:** apresentação da psicóloga, trajetória e experiência;
- **Especialidades:** áreas, demandas e temas trabalhados durante o acompanhamento;
- **Traumas:** seção dedicada à compreensão e ao tratamento de experiências traumáticas;
- **Visão clínica:** explicação sobre a forma de condução do processo terapêutico;
- **Agendamento:** orientações para iniciar o atendimento;
- **CTA final:** chamada direta para contato;
- **Rodapé:** informações profissionais e institucionais.

## Tecnologias utilizadas

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- JavaScript
- CSS
- HTML

## Estrutura do projeto

```text
src/
├── assets/
│   ├── logo-full.png
│   ├── logo-horizontal.png
│   └── marilei-krauss.webp
│
├── components/
│   ├── icons/
│   │   └── WhatsAppIcon.jsx
│   │
│   ├── layout/
│   │   ├── Container.jsx
│   │   ├── Footer.jsx
│   │   └── Header.jsx
│   │
│   └── ui/
│       ├── Button.jsx
│       ├── Eyebrow.jsx
│       ├── FlowerDivider.jsx
│       ├── LeafDecoration.jsx
│       ├── SectionHeading.jsx
│       └── SkipLink.jsx
│
├── data/
│   └── content.js
│
├── sections/
│   ├── AboutSection.jsx
│   ├── AppointmentSection.jsx
│   ├── ClinicalView.jsx
│   ├── FinalCta.jsx
│   ├── Hero.jsx
│   ├── ScienceSection.jsx
│   ├── Specialties.jsx
│   └── TraumaSection.jsx
│
├── utils/
├── App.jsx
├── index.css
└── main.jsx
```

## Organização dos componentes

O projeto foi dividido em três grupos principais:

### `components/layout`

Componentes responsáveis pela estrutura geral da página, como cabeçalho, rodapé e limitação da largura do conteúdo.

### `components/ui`

Elementos reutilizáveis da interface, como botões, títulos, divisores e elementos decorativos.

### `sections`

Cada arquivo representa uma seção completa da landing page. Essa divisão facilita a manutenção, a alteração da ordem dos conteúdos e a criação de novas páginas.

## Conteúdo centralizado

Os textos e informações principais do site podem ser organizados no arquivo:

```text
src/data/content.js
```

Manter o conteúdo separado dos componentes facilita atualizações futuras sem a necessidade de alterar diretamente a estrutura visual das seções.

## Como executar o projeto

### 1. Instale as dependências

```bash
npm install
```

### 2. Inicie o ambiente de desenvolvimento

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local para visualização do projeto.

### 3. Gere a versão de produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta:

```text
dist/
```

### 4. Visualize a versão de produção localmente

```bash
npm run preview
```

## Personalização

### Alterar textos

Edite o arquivo:

```text
src/data/content.js
```

### Alterar imagens e logotipos

Substitua ou adicione arquivos dentro de:

```text
src/assets/
```

Depois, atualize os imports nos componentes correspondentes.

### Alterar o WhatsApp

As configurações e a geração do link de contato ficam centralizadas nos arquivos da pasta:

```text
src/utils/
```

O botão reutilizável pode ser encontrado em:

```text
src/components/ui/Button.jsx
```

E o ícone utilizado no contato está em:

```text
src/components/icons/WhatsAppIcon.jsx
```

### Alterar cores e estilos

As configurações globais podem ser ajustadas nos arquivos:

```text
tailwind.config.js
src/index.css
```

## Responsividade

A interface foi estruturada para se adaptar a diferentes tamanhos de tela, incluindo:

- Smartphones;
- Tablets;
- Notebooks;
- Monitores maiores.

## Acessibilidade

O projeto possui uma estrutura preparada para boas práticas de acessibilidade, incluindo componente de navegação rápida:

```text
src/components/ui/SkipLink.jsx
```

Ao realizar alterações, recomenda-se manter:

- Textos alternativos nas imagens;
- Hierarquia correta de títulos;
- Contraste adequado entre texto e fundo;
- Estados visíveis de foco;
- Navegação funcional por teclado.

## Deploy

Após executar o comando de build, publique o conteúdo da pasta `dist` no serviço de hospedagem escolhido.

```bash
npm run build
```

Antes da publicação, verifique:

- Número e mensagem do WhatsApp;
- Informações profissionais;
- Links de navegação;
- Imagens e logotipos;
- Título e descrição da página;
- Funcionamento em dispositivos móveis.

## Licença

Projeto desenvolvido para uso institucional da psicóloga Marilei Krauss. A utilização, reprodução ou distribuição dos conteúdos e elementos visuais deve respeitar a autorização da responsável pelo projeto.