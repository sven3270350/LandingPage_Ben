import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cryptool</title>
        <meta name="description" content="Cryptool" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/8/82/Eo_circle_teal_letter-c.svg"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
