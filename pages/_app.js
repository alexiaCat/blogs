import '@/styles/globals.css';
import { Fragment } from "react";
import Navigation from "../components/navigation/Navigation";

function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Navigation />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default App;
