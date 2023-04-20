import Meta from "@/components/meta";
import Header from "@/components/header";

export function AppLayout(children): JSX.Element {
  return (
    <div className="root">
      <Meta />
      <Header />
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
