import styles from "./blockquote.module.scss";
import { type BlockquoteHTMLAttributes, type ReactNode } from "react";

const Blockquote = ({
  children,
  ...props
}: {
  children: ReactNode;
} & BlockquoteHTMLAttributes<HTMLElement>) => (
  <blockquote className={styles.root} {...props}>
    {children}
  </blockquote>
);

export default Blockquote;
