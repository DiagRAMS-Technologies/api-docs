import styles from "./ol.module.scss";
import { type OlHTMLAttributes, type ReactNode } from "react";

const OrderedList = ({
  children,
  ...props
}: {
  children: ReactNode;
} & OlHTMLAttributes<HTMLOListElement>) => (
  <ol className={styles.root} {...props}>
    {children}
  </ol>
);

export default OrderedList;
