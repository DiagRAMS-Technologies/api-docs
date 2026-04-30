import styles from "./mainContent.module.scss";
import { type ReactNode } from "react";

export default function MainContent({ children }: { children: ReactNode }) {
  return <main className={styles.content}>{children}</main>;
}
