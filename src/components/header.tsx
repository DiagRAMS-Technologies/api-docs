import Link from "next/link";
import { useRouter } from "next/router";

export default function Header(): JSX.Element {
  const router = useRouter();

  return (
    <div className="nav-bar">
      <nav>
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
            name: "Contact",
            path: "/contact",
            isHome: false,
          },
        ].map(({ name, path, isHome }, index) => {
          return (
            <Link key={index} legacyBehavior href={path}>
              <a
                className={
                  (
                    isHome
                      ? router.pathname === path
                      : router.pathname.startsWith(path)
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
          background-color: var(--primary);
          width: 100%;
          height: 100%;
          grid-row: 1;
          grid-column: 1/4;
        }
        nav {
          margin: 0 calc((var(--column) * 5));
          height: 100%;
          display: flex;
          justify-content: ;
          align-items: center;
        }

        nav > a {
          padding-left: var(--gutter);
        }

        .selected {
          color: var(--dark);
        }

        a {
          text-decoration: none;
          font-family: "Muli", "-apple-system", "Roboto", "Segoe UI", sans-serif;
          color: var(--light);
        }
      `}</style>
    </div>
  );
}
