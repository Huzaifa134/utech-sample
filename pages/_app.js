import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/layouts/PreLoader";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
  return (
    <Fragment>
      <Head>
        <title>Utech UAE Chapter</title>
        <link rel="shortcut icon" href="assets/images/Favicon.png" />
        <link
          rel="apple-touch-icon-precomposed"
          href="assets/images/Favicon.png"
        />
        
      </Head>
      {loader && <PreLoader />}
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
