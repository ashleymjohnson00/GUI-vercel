import "./style.css";
import Head from 'next/head';
import React from "react";

export default function MyApp({ Component: Component,
  pageProps: pageProps }) {
  React.useEffect(() => import("@lottiefiles/lottie-player"));
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" ></meta>
        <meta charSet="utf-8"></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  )
}