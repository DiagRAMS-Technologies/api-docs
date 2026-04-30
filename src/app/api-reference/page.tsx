import Swagger from "./swagger";
import ContentBlock from "../contentBlock";
import { type Metadata } from "next";
import buildMetadata from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    pathname: "/api-reference",
    title: "API Reference",
    description: "",
  });
}

export default function ApiReference() {
  return (
    <ContentBlock>
      <Swagger />
    </ContentBlock>
  );
}
