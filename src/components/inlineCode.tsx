import styles from "./inlineCode.module.scss";
import { type HTMLAttributes, type ReactNode } from "react";

const Code = ({
  children,
  ...props
}: {
  children: ReactNode;
} & HTMLAttributes<HTMLElement>) => (
  <code className={styles.root} {...props}>
    {children}
  </code>
);

export default Code;
