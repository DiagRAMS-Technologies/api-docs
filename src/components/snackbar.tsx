import styles from "./snackbar.module.scss";
import { type HTMLAttributes } from "react";

export default function Snackbar({
  message,
  type,
}: {
  message: string;
  type: string;
}) {
  return (
    <div className={`${styles.snackbar} ${type}`}>
      <p>{message}</p>
    </div>
  );
}
