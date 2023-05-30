import { ORGANISATION_NAME } from "../utils/constants";
import Meta from "../components/meta";
import Header from "../components/header";
import MainContent from "../components/mainContent";

export function Layout({ children, title, description, image } : {children: React.ReactNode, title: string, description: string, image: string}): JSX.Element {
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
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          background-color: #f7f6f6;
        }
      `}</style>
    </div>
  );
}
