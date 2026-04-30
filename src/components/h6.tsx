import styles from "./h6.module.scss";
import { type HTMLAttributes, type ReactNode } from "react";

const Heading6 = ({
  children,
  ...props
}: { children: ReactNode } & HTMLAttributes<HTMLElement>) => (
  <h6 className={styles.root} {...props}>
    {children}
  </h6>
);

export default Heading6;
