import { ORGANISATION_NAME } from "../utils/constants";
import Meta from "../components/meta";
import Header from "../components/header";
import MainContent from "../components/mainContent";

export function Layout({ children, title, description, image }): JSX.Element {
  return (
    <div className="root">
      <Meta
        name={ORGANISATION_NAME}
        title={title}
        description={description}
        image={image}
      />
      <Header />
      <MainContent>{children}</MainContent>
      {/* <Footer /> */}
      <style jsx>{`
        .root {
          display: grid;
          grid-template-rows: calc(var(--vRythm) * 2) auto;
          grid-template-columns: calc((var(--column) * 5)) 1fr calc(
              (var(--column) * 5)
            );
        }
        .contents {
          grid-column: 2 / 3;
        }
      `}</style>
    </div>
  );
}
