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
            width={200}
            height={40}
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
          width: 100%;
          height: 100%;
          grid-row: 1;
        }

        .bc-image{
          width: 250px;
          height: 100px;
          padding: 25px;
          background-color: white;
        }

        nav {
          background-color: #f7f6f6;
          margin: 0 calc((var(--column) * 4.5));
          height: 100%;
          display: flex;
          align-items: center;
          padding: 0 20px;
        }

        nav > a {
          border-right: 1px solid;
          display: block;
          border-color: var(--primary);
          background-color: var(--dark);
          padding: 25px;
          height:100px;
          min-width:200px;
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
          text-align: center;
          padding-top: 100px;
        }

        nav > a:hover {
          color: var(--primary);
        }

        @media screen and (max-width: 1500px) {
          nav {
            display: flex;
            flex-direction: column;
            margin: 0 calc((var(--column) * 2));
          }
          nav a {
            width: 250px;
          }
          nav:last-child{
            margin-bottom: 15px;
          }
      `}</style>
    </div>
  );
}
