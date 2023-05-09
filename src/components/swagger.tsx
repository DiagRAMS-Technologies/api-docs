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

const TAGS = ["events","images","attachments","sensors","reports","search","anomalies","data","maintenances","factories","organisations","users","auth","trends"]

const Swagger = () => {
  let url_api = "https://api.diagrams-technologies.dev/v0/openAPI?mutedParameters=X-APP-Version,X-SDK-Version,X-API-Version\n"
  TAGS.forEach(t => {
    url_api += "&\nmutedTags=" + t + "\n"
  })
  return (
    <div className="App">
      <DynamicSwagger url={url_api} 
        docExpansion='none'
       />
    </div>
  );
};

export default Swagger;
