
import React from 'react'
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider as PolarisProvider, Page, Card} from '@shopify/polaris';
import { AppProvider } from '../provider/AppProvider';
import HeaderCard from '../components/HeaderCard';

export default function Home({manifest}) {
  const {state, dispatch} = React.useContext(AppProvider)

  
  return (
    <PolarisProvider i18n={enTranslations}>
      <Page title="Mars Curiosity Rover">
        <HeaderCard manifest={{manifest}} />
      </Page>
    </PolarisProvider>
  );
}

// APP ideas -> 
// Using a semantic and polaris theme switch -> change in vibe
// Using a range of filters that allow for different search types.
// All of that would get put through a class, and depending on what 
// type of query was requested, we make a new search