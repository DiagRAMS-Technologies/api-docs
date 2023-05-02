import React from "react";
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

const Swagger = () => {
  return(
    <div className="App">
      <SwaggerUI url="http://api.diagrams.localhost:8000/v0/openAPI?mutedParameters=X-APP-Version,X-SDK-Version,X-API-Version" />
    </div>
  )
};

export default Swagger;