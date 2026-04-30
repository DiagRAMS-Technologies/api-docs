"use client";

import styles from "./header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MENU_ITEMS = [
  {
    name: "Home",
    path: "/",
    isHome: true,
  },
  {
    name: "Authentication",
    path: "/authentication",
    isHome: false,
  },
  {
    name: "Data bridge",
    path: "/data-bridge",
    isHome: false,
  },
  {
    name: "API Reference",
    path: "/api-reference",
    isHome: false,
  },
  {
    name: "News",
    path: "/news",
    isHome: false,
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <div className={styles.navBar}>
      <nav>
        <span className={styles.bcImage}>
          <Image
            src={`/images/diagrams.png`}
            alt="DiagRAMS logo"
            fill
            priority={true}
          />
        </span>
        {MENU_ITEMS.map(({ name, path, isHome }, index) => {
          return (
            <Link
              key={index}
              href={path}
              className={
                (isHome ? pathname === path : pathname.startsWith(path))
                  ? styles.selected
                  : ""
              }
            >
              <span>{name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
