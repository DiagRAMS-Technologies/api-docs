import React from "react";
import "swagger-ui-react/swagger-ui.css";
import dynamic from "next/dynamic";
import type SwaggerUI from "swagger-ui-react";
import { SwaggerUIProps } from "swagger-ui-react";

const DynamicSwagger = dynamic<SwaggerUIProps>(
  () => import("swagger-ui-react").then((module) => module.default),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);

const TAGS = [
  "auth",
  "users",
  "organisations",
  "factories",
  "interventions",
  "data",
  "alerts",
  "search",
  "reports",
  "trends",
  "attachments",
  "images",
  "events",
  "applications",
];

const Swagger = () => {
  let url_api =
    "https://api.diagrams-technologies.dev/v0/openAPI?mutedParameters=X-APP-Version,X-SDK-Version,X-API-Version\n";
  TAGS.forEach((t) => {
    url_api += "&\nmutedTags=" + t + "\n";
  });
  return (
    <div className="App">
      <DynamicSwagger url={url_api} docExpansion="none" />
    </div>
  );
};

export default Swagger;
