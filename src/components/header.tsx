import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function Header(): JSX.Element {
  const router = useRouter();

  const ImageWrap = styled.span`
    padding: 20px;
    display: block;
    float: left;
    background-color: var(--light);
    postion: relative;
    max-width: 50%;
    height: auto;
  `;

  return (
    <div className="nav-bar">
      <nav>
        <ImageWrap>
          <a href="/">
            <Image
              className="image-header"
              src="/../public/images/diagrams.png"
              alt="Picture of the author"
              width={250}
              height={50}
            />
          </a>
        </ImageWrap>
        {[
          {
            name: "Authentication",
            path: "/authentication",
          },
          {
            name: "Data bridge",
            path: "/data-bridge",
          },
          {
            name: "API Reference",
            path: "/api-reference",
          },
          {
            name: "Contact",
            path: "/contact",
          },
        ].map(({ name, path }, index) => {
          return (
            <Link key={index} legacyBehavior href={path}>
              <a className={router.asPath.startsWith(path) ? "selected" : ""}>
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
