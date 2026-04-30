import styles from "./h3.module.scss";
import { type HTMLAttributes, type ReactNode } from "react";

const Heading3 = ({
  children,
  ...props
}: { children: ReactNode } & HTMLAttributes<HTMLElement>) => (
  <h3 className={styles.root} {...props}>
    {children}
  </h3>
);

export default Heading3;
