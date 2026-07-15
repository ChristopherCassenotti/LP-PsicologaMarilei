import { ArrowRight } from "lucide-react";

const variants = {
  primary:
    "bg-clay-600 text-white shadow-card hover:-translate-y-0.5 hover:bg-clay-700 hover:shadow-soft",
  secondary:
    "border border-gold-500/50 bg-white/80 text-olive-900 backdrop-blur hover:-translate-y-0.5 hover:border-gold-500 hover:bg-white",
  light:
    "bg-ivory-50 text-olive-900 hover:-translate-y-0.5 hover:bg-white",
};

export function Button({
  href,
  children,
  variant = "primary",
  icon: Icon = ArrowRight,
  className = "",
  ariaLabel,
  onClick,
}) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      onClick={onClick}
      className={`inline-flex min-h-14 items-center justify-center gap-3 rounded-xl px-6 py-3.5 text-center text-sm font-bold uppercase tracking-[0.02em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 motion-reduce:transform-none ${variants[variant]} ${className}`}
    >
      {Icon && (
        <Icon
          aria-hidden="true"
          focusable="false"
          size={20}
          strokeWidth={1.8}
        />
      )}
      <span>{children}</span>
    </a>
  );
}
