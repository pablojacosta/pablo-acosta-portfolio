import "@styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import NavBar from "@components/shared/NavBar/NavBar";
import Footer from "@components/shared/Footer/Footer";
import { CONTACT } from "constants/routes";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const isContact = pathname === CONTACT;

  return (
    <div id="app">
      <Head>
        <meta name="description" content="Pablo Acosta - Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon_32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon_16x16.png"
        />
        <title>Pablo Acosta - Portfolio</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />
      {!isContact && <Footer />}
    </div>
  );
}
