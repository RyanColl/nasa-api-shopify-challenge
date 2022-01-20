
import * as React from 'react'
import { Button } from 'semantic-ui-react'
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Page, Card} from '@shopify/polaris';
export default function Home() {
  const [open, setOpen] = React.useState(false);

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
