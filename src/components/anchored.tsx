import Link from "next/link";
import { publicRuntimeConfig } from "../utils/config";

const Anchored = ({
  children,
  id = "",
}: {
  children: React.ReactNode;
  id?: string;
}) => {
  return (
    <span className="root">
      {children}{" "}
      <small>
        <Link legacyBehavior href={`#${id}`}>
          <a className="icon" id={id}>
            <span>🔗</span>
          </a>
        </Link>
      </small>
      <style jsx>{`
        small {
          font-weight: bold;
        }
        a.icon {
          display: none;
          width: calc(var(--column) * 0.9);
          height: calc(var(--vRythm) * 0.9);
          background: var(--quaternary);
          mask-repeat: no-repeat;
          mask-position: left center;
          mask-size: calc(var(--vRythm) * 0.65);
        }
        .root:hover a.icon {
          display: inline-block;
          mask-image: url("${publicRuntimeConfig.basePath}/images/icons/link.svg");
        }
        a.icon:target {
          display: inline-block;
          mask-image: url("${publicRuntimeConfig.basePath}/images/icons/target.svg");
        }
        a.icon span {
          display: none;
        }
      `}</style>
    </span>
  );
};

export default Anchored;
