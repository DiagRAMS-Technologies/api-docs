import styles from "./img.module.scss";
import { type ImgHTMLAttributes, type ReactNode } from "react";

export type ImageOrientation = "portrait" | "landscape" | "square";
export type ImageFloating = "left" | "right";

const Img = ({
  orientation = "landscape",
  float,
  ...props
}: {
  orientation: ImageOrientation;
  float?: ImageFloating;
} & ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <span
      className={`${styles.root}${float ? " " + styles[float] : ""}${
        orientation ? " " + styles[orientation] : ""
      }`}
    >
      <img className={props.className || ""} {...props} />
    </span>
  );
};

export default Img;
