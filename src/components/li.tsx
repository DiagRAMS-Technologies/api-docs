import styles from "./li.module.scss";
import { type LiHTMLAttributes, type ReactNode } from "react";

const ListItem = ({
  children,
  ...props
}: {
  children: ReactNode;
} & LiHTMLAttributes<HTMLLIElement>) => (
  <li className={styles.root} {...props}>
    {children}
  </li>
);

export default ListItem;
