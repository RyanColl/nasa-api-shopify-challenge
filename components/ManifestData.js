import React from 'react';
import {Page, Card} from '@shopify/polaris';
import { motion } from 'framer-motion';
function ManifestData({ data }) {
  const {
    manifest: { photo_manifest },
  } = data;
  console.log(photo_manifest);
  return (
    <>
      {photo_manifest &&
        <Card title="Curiosity Manifest" sectioned>
          <motion.span animate={{ y: -3 }} className="flex">
            <h1>Landing Date:</h1><h1>{photo_manifest.landing_date}</h1>
          </motion.span>
        </Card>
      }
    </>
  );
}

export default ManifestData;
