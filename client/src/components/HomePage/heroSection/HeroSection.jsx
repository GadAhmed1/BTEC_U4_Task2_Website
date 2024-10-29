import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export default function HeroSection() {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 }
  };

  return (
    <div className="items-center justify-center text-center TheQoutDiv select-none">
      <motion.h1 
        className="TheQout text-4xl sm:text-6xl font-bold"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        Success begins with a brave step
      </motion.h1>
      <motion.p 
        className="mt-5 font-normal text-lg sm:text-2xl opacity-75 "
        variants={fadeIn}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.2 }}
      >
        Success begins with a brave step, followed by persistence.
      </motion.p>
      <NavLink to="/competitions">
        <motion.button 
          className="loginbtn text-white border rounded-2xl px-3 transition duration-200 mt-10 bg-gray-800 hover:bg-gray-700 ThePaddingButton fixed-btn text-md TheMidBTN"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
        >
          Join the Challenge
        </motion.button>
      </NavLink>
    </div>
  );
}
