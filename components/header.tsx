import Link from "next/link";
import { useRouter } from "next/router";

export default function Header(): JSX.Element {
  const router = useRouter();

  console.log(router.pathname);

  return (
    <div className="nav-bar">
      <nav>
        <Link legacyBehavior href="/">
          <a className={router.pathname === "/" ? "selected" : ""}>
            <span>Home</span>
          </a>
        </Link>
        <Link legacyBehavior href="/auth">
          <a className={router.pathname === "/auth" ? "selected" : ""}>
            <span>API auth guide</span>
          </a>
        </Link>
        <Link legacyBehavior href="/apiReference">
          <a className={router.pathname === "/apiReference" ? "selected" : ""}>
            <span>API Reference</span>
          </a>
        </Link>
        <Link legacyBehavior href="/contact">
          <a className={router.pathname === "/contact" ? "selected" : ""}>
            <span>Contact</span>
          </a>
        </Link>
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
