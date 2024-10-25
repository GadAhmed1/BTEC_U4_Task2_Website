import React from 'react';
import { motion } from 'framer-motion';
import HeaderC from '../reusable components/header/header';
import CardBody from './InfoSection.jsx/CardBody';
import Footer from '../reusable components/footer/footer';
import TheRowCard from './InfoSection.jsx/TheRowCard';

function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className='TheBGImage flex-grow'>
        <HeaderC />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <CardBody />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <TheRowCard />
        </motion.div>

        <br />
        <br />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Footer />
        </motion.div>
      </div>
    </div>
  );
}

export default AboutUsPage;
