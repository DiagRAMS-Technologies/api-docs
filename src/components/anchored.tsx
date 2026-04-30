import Link from "next/link";
import styles from "./anchored.module.scss";
import { type ReactNode } from "react";

const Anchored = ({
  children,
  id = "",
}: {
  children: ReactNode;
  id?: string;
}) => {
  return (
    <span className={styles.root}>
      {children}{" "}
      <small>
        <Link href={`#${id}`} className={styles.icon} id={id}>
          <span>🔗</span>
        </Link>
      </small>
    </span>
  );
};

export default Anchored;
