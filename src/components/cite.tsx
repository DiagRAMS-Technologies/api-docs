import styles from "./cite.module.scss";
import { type HTMLAttributes, type ReactNode } from "react";

const Cite = ({
  children,
  ...props
}: {
  children: ReactNode;
} & HTMLAttributes<HTMLElement>) => (
  <cite className={styles.root} {...props}>
    {children}
  </cite>
);

export default Cite;
