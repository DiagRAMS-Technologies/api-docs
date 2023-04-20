import React, { useEffect } from "react";
import { SwaggerUIBundle, SwaggerUIStandalonePreset } from "swagger-ui-dist";

const DOM_ID = "swagger-ui";
const SWAGGER_URL =
  "http://api.diagrams.localhost:8000/v0/openAPI?mutedParameters=X-APP-Version,X-SDK-Version,X-API-Version";
  //"https://api.diagrams-technologies.dev/v0/openAPI?mutedParameters=X-APP-Version,X-SDK-Version,X-API-Version";

const TAGS_ORDER = {
  system: 1,
  users: 2,
  organisations: 3,
  devices: 4,
  oauth2: 5,
  partners: 6,
  data: 7
};

const HideEmptyTagsPlugin = () => {
  return {
    statePlugins: {
      spec: {
        wrapSelectors: {
          taggedOperations: ori => (...args) => {
            return ori(...args).filter(
              tagMeta =>
                tagMeta.get("operations") && tagMeta.get("operations").size > 0
            );
          }
        }
      }
    }
  };
};

const Swagger = () => {
  useEffect(() => {
    SwaggerUIBundle({
      url: SWAGGER_URL,
      dom_id: `#${DOM_ID}`,
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIStandalonePreset.slice(1)
      ],
      plugins: [SwaggerUIBundle.plugins.DownloadUrl, HideEmptyTagsPlugin],
      layout: "StandaloneLayout",
      displayOperationId: true,
      deepLinking: true,
      tagsSorter: (a, b) => {
        return (TAGS_ORDER[a] || 99) - (TAGS_ORDER[b] || 99);
      }
    });
  }, []);
  return <div id={DOM_ID} />;
};

export default Swagger;
