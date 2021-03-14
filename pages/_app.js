import "../styles/global.css";
import Head from "next/head";
import NoScript from "./no-script";
import NProgress from "nprogress";
import Router from "next/router";
import "nprogress/nprogress.css";

NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 800,
  showSpinner: false,
});

export default function App({ Component, pageProps }) {
  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

  return (
    <>
      <Head>
        <meta charSet="utf-8" />

        <meta content="/img/logo2.png" name="thumbnail" />

        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />

        <meta
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
          name="viewport"
        />

        <meta
          content="Launch information for all SpaceX missions"
          name="description"
        />

        <meta
          content="SpaceX, rocket, launch, rocket launch, spacex rocket launch, spacex mission, mission"
          name="keywords"
        />

        <title>SpaceX Launch</title>

        <meta content="#2871d2" name="theme-color" />

        <noscript>
          <NoScript />
        </noscript>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
