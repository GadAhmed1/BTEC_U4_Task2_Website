import React from 'react';
import { motion } from 'framer-motion';
import HeaderC from '../reusable components/header/header';
import Footer from '../reusable components/footer/footer';
import TheComptions from './TheComptions';
import TehTable from './TheInfoTable';
function Competitions() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className='TheBGImage flex-grow'>
        <HeaderC />
        <div>
            <TehTable isGroup={false} />

            <TehTable isGroup={true} />
        </div>
        <TheComptions></TheComptions>
        <div className=''>
        <Footer />
        </div>
      </div>
    </div>
  );
}

export default Competitions;
