
import * as React from 'react'
import { Button } from 'semantic-ui-react'
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Page, Card} from '@shopify/polaris';
const baseUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?'
export default function Home({uri}) {
  const [open, setOpen] = React.useState(false);
  console.log(uri)
  return (
    <AppProvider i18n={enTranslations}>
      <Page title="Example app">
        <Card sectioned>
          <Button onClick={() => alert("Button clicked!")}>
            Example button
          </Button>
        </Card>
      </Page>
    </AppProvider>
  );
}

Home.getInitialProps = async (ctx) => {
    console.log(ctx)
    let api_key = process.env.NASA_API_KEY;
    let api_string = `&api_key=${api_key}`;
    let sol = 1;
    let sol_string = `sol=${sol}`;
    let page = 1;
    // Camera uses abbreviation for the type fo camera
    // FHAZ -> Front Hazard Avoidance Camera
    // RHAZ -> Rear Hazard Avoidance Camera
    // MAST -> Mast Camera
    // CHEMCAM -> Chemistry and Camera Complex
    // MAHLI -> Mars Hand Lens Imager
    // MARDI -> Mars Descent Imager
    // NAVCAM -> Navigation Camera
    let camera = ''
    let cam_string = `&camera=`
    let page_string = `&page=${page}`;
    let uri = `${baseUrl}${sol_string}${api_string}`;
    return { uri  }
}