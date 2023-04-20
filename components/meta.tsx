import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{"API doc"}</title>
      <meta name="description" content="The DiagRAMS API documentation" />
      <meta name="theme-color" content="darkBackground" />

      <link
        rel="icon"
        type="image/svg+xml"
        href={`./public/images/favicon.svg`}
        sizes="any"
      />
      <link
        rel="icon"
        type="image/png"
        href={`./public/images/favicon-16.png`}
        sizes="16x16"
      />
      <link
        rel="icon shortcut"
        type="image/png"
        href={`./public/images/favicon-128.png`}
        sizes="128x128"
      />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="robots" content="index,follow" />
      <link rel="stylesheet" href={`./styles/global.css`} />
    </Head>
  );
}
