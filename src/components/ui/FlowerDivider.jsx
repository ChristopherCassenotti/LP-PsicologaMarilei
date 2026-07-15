export function FlowerDivider() {
  return (
    <div aria-hidden="true" className="my-5 flex items-center gap-3 text-gold-500">
      <span className="h-px w-11 bg-gold-500/45" />
      <svg
        focusable="false"
        viewBox="0 0 42 22"
        className="h-6 w-11"
        fill="none"
      >
        <path
          d="M21 19C13 15 9 10 10 3C16 5 20 9 21 19ZM21 19C29 15 33 10 32 3C26 5 22 9 21 19ZM21 19C17 12 17 7 21 1C25 7 25 12 21 19Z"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
      <span className="h-px w-11 bg-gold-500/45" />
    </div>
  );
}
