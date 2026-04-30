import styles from "./hr.module.scss";
import { type HTMLAttributes, type ReactNode } from "react";

const HorizontalRule = (props: HTMLAttributes<HTMLHRElement>) => (
  <>
    <hr className={styles.root} {...props} />
  </>
);

export default HorizontalRule;
