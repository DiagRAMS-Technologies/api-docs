"use client";

import { PrismAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styles from "./codeBlock.module.scss";
import { type HTMLAttributes } from "react";

export default function CodeBlock({
  children,
  className,
}: {
  children: string;
} & HTMLAttributes<HTMLElement>) {
  return (
    <div className={styles.syntax + (className ? " " + className : "")}>
      <SyntaxHighlighter language={"bash"} style={dracula}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
