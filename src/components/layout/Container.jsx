export function Container({
  as: Element = "div",
  children,
  className = "",
}) {
  return (
    <Element
      className={`mx-auto w-full max-w-[1920px] px-5 lg:px-20 ${className}`}
    >
      {children}
    </Element>
  );
}
