// pages/_app.js
import React from "react";
import Head from "next/head";
import nProgress from "nprogress";
import "../styles/nProgress.css";
import "../styles/cards.css";
import "../styles/grid.css";
import "../styles/styles.css";
import "../styles/user.css";
import { Router } from "next/router";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
