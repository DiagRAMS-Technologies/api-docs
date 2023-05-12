import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { publicRuntimeConfig } from "../utils/config";

export default function Header(): JSX.Element {
  const router = useRouter();

  return (
    <div className="nav-bar">
      <nav>
        <span className="bc-image">
          <Image
            src={`${publicRuntimeConfig.basePath}/images/diagrams.png`}
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

        .bc-image{
          width: 300px;
          height: 100px;
          padding: 25px;
          background-color: white;
        }

        nav {
          background-color: var(--dark);
          margin: 0 calc((var(--column) * 3.50));
          height: 100%;
          display: flex;
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
          display: block;
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
