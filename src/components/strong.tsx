import styles from "./strong.module.scss";
import { type HTMLAttributes, type ReactNode } from "react";

const Strong = ({
  children,
  ...props
}: {
  children: ReactNode;
} & HTMLAttributes<HTMLElement>) => (
  <strong className={styles.root} {...props}>
    {children}
  </strong>
);

export default Strong;
