import styles from "./h2.module.scss";
import { type HTMLAttributes, type ReactNode } from "react";

const Heading2 = ({
  children,
  className,
  ...props
}: { children: ReactNode } & HTMLAttributes<HTMLElement>) => (
  <h2
    className={`${styles.root}${className ? ` ${className}` : ""}`}
    {...props}
  >
    {children}
  </h2>
);

export default Heading2;
