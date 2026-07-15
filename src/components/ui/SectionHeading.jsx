import { Eyebrow } from "./Eyebrow";

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <Eyebrow light={light} centered={centered}>
          {eyebrow}
        </Eyebrow>
      )}

      <h2
        id={id}
        className={`font-display text-4xl font-semibold leading-[1.04] sm:text-5xl lg:text-6xl ${
          light ? "text-ivory-50" : "text-olive-900"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 text-base leading-8 sm:text-xl ${
            light ? "text-ivory-100/85" : "text-olive-900/80"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
