import styles from "./em.module.scss";
import { type HTMLAttributes, type ReactNode } from "react";

const Emphasis = ({
  children,
  ...props
}: {
  children: ReactNode;
} & HTMLAttributes<HTMLElement>) => (
  <em className={styles.root} {...props}>
    {children}
  </em>
);

export default Emphasis;
