import type { HTMLAttributes } from "react";

const Paragraph = ({
  children,
  ...props
}: {
  children: React.ReactNode;
} & HTMLAttributes<HTMLParagraphElement>) => (
  <p className="root" {...props}>
    {children}
    <style jsx>{`
      .root {
        margin: 0 0 calc(var(--vRythm)*0.5) 0;
        color: var(--charcoalgrey)
      }
    `}</style>
  </p>
);

export default Paragraph;