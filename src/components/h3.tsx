import type { HTMLAttributes } from "react";

const Heading3 = ({
  children,
  ...props
}: { children: React.ReactNode } & HTMLAttributes<HTMLElement>) => (
  <h3 className="root" {...props}>
    {children}
    <style jsx>{`
      .root {
        font-family: var(--headingFont);
        font-size: calc(var(--greatFontSize)*0.75);
        line-height: var(--greatLineHeight);
        text-decoration: none;
        font-weigth: normal;
        margin: var(--vRythm) 0 0 0;
      }
    `}</style>
  </h3>
);

export default Heading3;