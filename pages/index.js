
import React from 'react'
import { Button } from 'semantic-ui-react'
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Page, Card} from '@shopify/polaris';
import {UrlServices} from '../services/url.services'
import {motion} from 'framer-motion'
const roverImage = 'https://scx2.b-cdn.net/gfx/news/hires/2017/nextmarsrove.jpg'
export default function Home({api}) {
  const [open, setOpen] = React.useState(false);
  const uriServices = new UrlServices(api)
  React.useEffect(() => {
      uriServices.SearchManifest().then(res=>res.json()).then(data => {
          console.log(data)
      })
  })
  console.log(api)
  return (
    <AppProvider i18n={enTranslations}>
      <Page title="Mars Curiosity Rover">
        <Card sectioned>
          <Button onClick={() => alert("App is in the making!")}>
            <motion.img src={roverImage} />
          </Button>
        </Card>
      </Page>
    </AppProvider>
  );
}

// APP ideas -> 
// Using a semantic and polaris theme switch -> change in vibe
// Using a range of filters that allow for different search types.
// All of that would get put through a class, and depending on what 
// type of query was requested, we make a new search


Home.getInitialProps = async (ctx) => {
    let api_key = process.env.NASA_API_KEY;
    return { api: api_key }
}