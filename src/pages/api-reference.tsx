import { Layout } from "../layouts/main";
import Swagger from "../components/swagger";
import ContentBlock from "../components/contentBlock";

export default function ApiReference() {
  return (
    <Layout
      title="API Reference"
      description=""
      image="/illustrations/banner.jpg"
    >
      <ContentBlock>
        <Swagger />
      </ContentBlock>
      <style jsx>{`
        :global(p.illustration) {
          float: left;
          width: var(--block);
          margin: 0 var(--gutter) 0 0;
        }
        img {
          width: 100%;
          margin: 0;
        }
        .clear {
          clear: both;
        }
      `}</style>
    </Layout>
  );
};
