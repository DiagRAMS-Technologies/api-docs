import type { HTMLAttributes } from "react";

const Heading2 = ({
  children,
  className,
  ...props
}: { children: React.ReactNode } & HTMLAttributes<HTMLElement>) => (
  <h2 className={`root${className ? " " + className : ""}`} {...props}>
    {children}
    <style jsx>{`
      .root {
        color: var(--dark);
        font-family: var(--headingFont);
        font-size: var(--greatFontSize);
        line-height: var(--greatLineHeight);
        font-weigth: normal;
        margin: var(--vRythm) 0 0 0;
      }
    `}</style>
  </h2>
);

export default Heading2;
