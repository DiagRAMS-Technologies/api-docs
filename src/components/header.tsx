import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function Header(): JSX.Element {
  const router = useRouter();


  return (
    <div className="nav-bar">
      <nav>
          <span className="essai">
            <Image
              src="/../public/images/diagrams.png"
              alt="Picture of the author"
              width={250}
              height={50}
            />
          </span>
        {[
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
        ].map(({ name, path, isHome }, index) => {
          return (
            <Link key={index} legacyBehavior href={path}>
              <a
                className={
                  (
                    isHome
                      ? router.asPath === path
                      : router.asPath.startsWith(path)
                  )
                    ? "selected"
                    : ""
                }
              >
                <span>{name}</span>
              </a>
            </Link>
          );
        })}
      </nav>
      <style jsx>{`
        .nav-bar {
          background-color: #f7f6f6;
          width: 100%;
          height: 100%;
          grid-row: 1;
        }

        nav {
          background-color: var(--dark);
          margin: 0 calc((var(--column) * 5));
          height: 100%;
          display: block;
          align-items: center;
          padding: 20px;
        }

        nav > a {
          padding-left: var(--gutter);
          padding-left: var(--gutter);
          border-right: 1px solid;
          padding-left: 20px;
          padding-right: 20px;
          padding-bottom: 5px;
          border-color: var(--primary);
        }

        .selected {
          color: var(--primary);
        }

        a {
          text-decoration: none;
          font-family: "Montserrat", sans-serif !important;
          font-size: 20px;
          color: var(--light);
          font-weight: 700;
        }

        nav > a:hover {
          color: var(--primary);
        }

      `}</style>
    </div>
  );
}
