import "./style.css";
import { ToastProvider } from "react-toast-notifications";
import React from "react";

/* this file basically establishes some components for all the pages like the toaster notifications */
function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider autoDismiss={false} placement={'top-center'} newestOnTop={false}>
      <Component {...pageProps} />
    </ToastProvider>
    
  );
  
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;