import React from 'react';
import {AnimatePresence, motion} from 'framer-motion'
import {Card, Button} from '@shopify/polaris';
import ManifestData from './ManifestData';
// import { Button, Popup } from 'semantic-ui-react'
const roverImage = 'https://scx2.b-cdn.net/gfx/news/hires/2017/nextmarsrove.jpg'
function HeaderCard({manifest}) {
  const [open, setOpen] = React.useState(false);
  // console.log(manifest)
  return (
    <Card sectioned>
      <motion.div 
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
      >
      <Button onClick={() => alert("App is in the making!")}>
        <motion.img
          className='rover-img'
          
          src={roverImage}
        />
            
            <AnimatePresence
              initial={false}
              exitBeforeEnter={true}
            >
            {open &&
              <motion.div
              className='rover-popup'
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              >
                {manifest && <ManifestData data={manifest} />}
              </motion.div>
            } 
            </AnimatePresence>
                 
      </Button>
      </motion.div>
    </Card>
  );
}

export default HeaderCard;

const container = {
  hidden: {
      display: 'none',
      visibility: 'hidden',
      opacity: 0,
      scale: 0,
      width: 0,
      transition: {
          when: "afterChildren"
      }
  },
  visible: {
      display: 'flex',
      visibility: 'visible',
      opacity: 1,
      scale: 1,
      width: 300,
      transition: {
          when: "beforeChildren",
          staggerChildren: 0.3
      }
  }
}

const variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1
  }
}
