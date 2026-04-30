import { type ReactNode } from "react";
import Anchor from "./a";
import styles from "./attachment.module.scss";

export default function Attachment({
  src,
  title,
  children,
}: {
  src: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <span className={styles.root}>
      <Anchor href={src} title={title} target="_blank">
        {children}
      </Anchor>
      <iframe
        width="100%"
        height="800px"
        src={src}
        title={title}
        allowFullScreen
      ></iframe>
    </span>
  );
}
