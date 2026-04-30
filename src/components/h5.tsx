import styles from "./h5.module.scss";
import { type HTMLAttributes, type ReactNode } from "react";

const Heading5 = ({
  children,
  ...props
}: { children: ReactNode } & HTMLAttributes<HTMLElement>) => (
  <h5 className={styles.root} {...props}>
    {children}
  </h5>
);

export default Heading5;
