import styles from "./image.module.scss";
import { type ImgHTMLAttributes, type ReactNode } from "react";
import Img from "./img";

export type ImageOrientation = "portrait" | "landscape" | "square";
export type ImageFloating = "left" | "right";

const Image = ({
  orientation = "landscape",
  float,
  ...props
}: {
  orientation: ImageOrientation;
  float?: ImageFloating;
} & ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <span className={styles.img}>
      <Img {...props} orientation="landscape" />
    </span>
  );
};

export default Image;
