import Link from "next/link";
import { publicRuntimeConfig } from "../utils/config";
import type { LinkProps } from "next/link";

const Anchor = ({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale,
  className,
  icon,
  iconPosition = "first",
  ...props
}: {
  children: React.ReactNode;
} & LinkProps & {
    icon?: string;
    iconPosition?: "first" | "last";
  } & Exclude<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) => (
  <Link
    {...{
      href,
      as,
      replace,
      scroll,
      shallow,
      passHref,
      prefetch,
      locale,
    }}
    className={`root${className ? " " + className : ""}${
      icon ? ` ${iconPosition}` : ""
    }`}
    {...props}
    target={href.startsWith("http") ? "_blank" : "_self"}
  >
    {icon ? <span className="icon" /> : null}
    {children}
    <style jsx>{`
      :global(a).root,
      :global(a).root:visited {
        cursor: pointer;
        text-decoration: none;
        color: var(--primary);
        line-height: var(--mediumLineHeight);
      }
      :global(a).root:hover,
      :global(a).root:focus {
        color: var(--primary);
      }
      :global(a).root.first,
      :global(a).root.last {
        display: inline-flex;
        flex-direction: row;
        gap: calc(var(--gutter) / 4);
        align-items: center;
      }
      :global(a).root.first span.icon,
      :global(a).root.last span.icon {
        display: flex;
        height: var(--vRythm);
        width: calc(var(--vRythm) * 0.55);
        background: var(--primary);
        mask-repeat: no-repeat;
        mask-size: calc(var(--vRythm) * 0.55);
        -webkit-mask-size: calc(var(--vRythm) * 0.55);
        mask-position: left bottom;
        mask-image: url("${publicRuntimeConfig.basePath}/images/icons/arrow-left.svg");
      }
      :global(a).root.last {
        flex-direction: row-reverse;
      }
      :global(a).root.last span.icon {
        mask-image: url("${publicRuntimeConfig.basePath}/images/icons/arrow-right.svg");
      }
    `}</style>
  </Link>
);

export default Anchor;
