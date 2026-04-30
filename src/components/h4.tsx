import styles from "./h4.module.scss";
import { type HTMLAttributes, type ReactNode } from "react";

const Heading4 = ({
  children,
  ...props
}: { children: ReactNode } & HTMLAttributes<HTMLElement>) => (
  <h4 className={styles.root} {...props}>
    {children}
  </h4>
);

export default Heading4;
