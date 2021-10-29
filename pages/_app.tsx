import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <div className="app">
          <Header />
              <Component {...pageProps} />
              <Jumbotron />
          <Footer />
      </div>

  )
}
export default MyApp
