import styles from "./ul.module.scss";
import { type HTMLAttributes, type ReactNode } from "react";

const UnorderedList = ({
  children,
  ...props
}: { children: ReactNode } & HTMLAttributes<HTMLUListElement>) => (
  <ul className={styles.root} {...props}>
    {children}
  </ul>
);

export default UnorderedList;
