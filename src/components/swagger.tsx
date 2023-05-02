import React from "react";
import type SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import dynamic from "next/dynamic";

const DynamicSwagger = dynamic<SwaggerUI>(
  () => import("swagger-ui-react"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  },
);

const Swagger = () => {
  return (
    <div className="App">
      <DynamicSwagger url="https://api.diagrams-technologies.com/v0/openAPI?mutedParameters=X-APP-Version,X-SDK-Version,X-API-Version" />
    </div>
  );
};

export default Swagger;
