import styles from "./p.module.scss";
import { type HTMLAttributes, type ReactNode } from "react";

const Paragraph = ({
  children,
  ...props
}: {
  children: ReactNode;
} & HTMLAttributes<HTMLParagraphElement>) => (
  <p className={styles.root} {...props}>
    {children}
  </p>
);

export default Paragraph;
