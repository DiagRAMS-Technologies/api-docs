import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { publicRuntimeConfig } from "../utils/config";
import { CSS_BREAKPOINT_START_L } from "../utils/constants";

export default function Header(): JSX.Element {
  const router = useRouter();

  return (
    <div className="nav-bar">
      <nav>
        <span className="bc-image">
          <Image
            src={`${publicRuntimeConfig.basePath}/images/diagrams.png`}
            alt="Picture of the author"
            fill
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
          {
            name: "News",
            path: "/news",
            isHome: false,
          },
        ].map(({ name, path, isHome }, index) => {
          return (
            <Link
              key={index}
              href={path}
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
            </Link>
          );
        })}
      </nav>
      <style jsx>{`
        .nav-bar {
          background-color: var(--light);
          display: flex;
          justify-content: center;
          margin: 0 0 var(--gutter) 0;
        }

        nav {
          display: flex;
          align-items: center;
        }

        .bc-image {
          position: relative;
          width: calc(calc(var(--column) * 2) + calc(var(--gutter) * 1));
          height: calc(var(--vRythm) * 2);
          background-color: white;
          margin: 0 var(--gutter);
        }

        .bc-image :global(img) {
          object-fit: scale-down;
        }

        nav > :global(a) {
          border-right: 1px solid;
          display: block;
          border-color: var(--primary);
          background-color: var(--dark);
          line-height: calc(var(--vRythm) * 2);
          padding: 0 var(--gutter);
          text-decoration: none;
          font-family: "Montserrat", sans-serif !important;
          font-size: 20px;
          color: var(--light);
          font-weight: 700;
          text-align: center;
          align-self: stretch;
        }

        nav > :global(a.selected) {
          color: var(--darkgrey);
        }

        nav > :global(a):hover {
          color: var(--darkgrey);
        }

        @media (max-width: ${CSS_BREAKPOINT_START_L}) {
          nav {
            flex-direction: column;
            margin: 0 0 var(--gutter) 0;
          }
        }
      `}</style>
    </div>
  );
}
