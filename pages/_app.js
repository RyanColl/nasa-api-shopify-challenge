import Head from 'next/head';
import 'semantic-ui-css/semantic.min.css'
import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/@shopify/polaris@7.6.0/build/esm/styles.css"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
