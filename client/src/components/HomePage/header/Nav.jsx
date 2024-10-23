import { motion } from 'framer-motion';

export default function Nav() {
  return (
    <motion.nav
      className="ChnageTheBorder border border-opacity-50 bg-white bg-opacity-5 select-none flex justify-center rounded-2xl mx-auto w-max"
    >
      <motion.p
        whileHover={{ scale: 1 }} // Scale up on hover for a subtle motion effect
        whileTap={{ scale: 0.95 }} // Add a tap effect
        className="bg-white text-black font-medium px-4 py-2 rounded-tl-xl rounded-bl-xl cursor-pointer transition-colors duration-300"
      >
        Home
      </motion.p>
      <motion.a
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.95 }}
        className=" hover:bg-white hover:text-black font-medium px-4 py-2 cursor-pointer transition-colors duration-300"
      >
        About Us
      </motion.a>
      <motion.p
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.95 }}
        className="hover:bg-white hover:text-black font-medium px-4 py-2 cursor-pointer transition-colors duration-300"
      >
        Contact
      </motion.p>
      <motion.p
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.95 }}
        className="hover:bg-white hover:text-black font-medium px-4 py-2 rounded-tr-xl rounded-br-xl cursor-pointer transition-colors duration-300"
      >
        Competitions
      </motion.p>
    </motion.nav>
  );
}
