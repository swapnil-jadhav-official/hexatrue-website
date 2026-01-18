import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon_icon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon_icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon_icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
