import Head from 'next/head';
import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import AppContext from '../provider/AppProvider';
import {UrlServices} from '../services/uri.services'
import '../styles/global.css'

export default function MyApp({ Component, pageProps, api }) {
  const uriServices = new UrlServices(api)
  const [manifest, setManifest] = React.useState({})
  React.useEffect(() => {
      uriServices.SearchManifest()
      .then(res=>res.json())
      .then(data => {
          setManifest(data)
      })
  }, [])
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/@shopify/polaris@7.6.0/build/esm/styles.css"/>
      </Head>
      <AppContext>
        <Component manifest={manifest} {...pageProps} />
      </AppContext>
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  let api_key = process.env.NASA_API_KEY;
  return { api: api_key }
}
