import "./globals.scss";
import styles from "./layout.module.scss";
import { type ReactNode, StrictMode } from "react";
import { ORGANISATION_PRIMARY_COLOR } from "../utils/constants";
import Header from "./header";
import { type Viewport } from "next";
import MainContent from "./mainContent";
import GridSystem from "./_gridSystem";

export const viewport: Viewport = {
  themeColor: ORGANISATION_PRIMARY_COLOR,
  width: "device-width",
  initialScale: 1,
};

export default function Layout({ children }: { children: ReactNode }) {
  const mainLayout = (
    <div className={styles.root}>
      <Header />
      <MainContent>{children}</MainContent>
    </div>
  );
  return (
    <html lang="en">
      <body
        className={
          process.env.NODE_ENV === "development" ? "showScreenSizes" : ""
        }
      >
        {process.env.NODE_ENV === "development" ? <GridSystem /> : null}
        {process.env.NODE_ENV === "development" ? (
          <StrictMode>{mainLayout}</StrictMode>
        ) : (
          <div className={styles.root}>{mainLayout}</div>
        )}
      </body>
    </html>
  );
}
