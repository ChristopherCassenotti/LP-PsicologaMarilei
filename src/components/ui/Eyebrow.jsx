export function Eyebrow({ children, light = false, centered = false }) {
  return (
    <p
      className={`mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.22em] ${
        centered ? "justify-center" : ""
      } ${light ? "text-gold-400" : "text-gold-600"}`}
    >
      <span
        aria-hidden="true"
        className={`h-px w-9 ${light ? "bg-gold-400/70" : "bg-gold-500/70"}`}
      />
      {children}
    </p>
  );
}
