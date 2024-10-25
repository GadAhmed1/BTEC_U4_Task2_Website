import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <motion.nav
      className="ChnageTheBorder border border-opacity-50 bg-white bg-opacity-5 select-none flex justify-center rounded-2xl mx-auto w-max"
    >
      <NavLink
        to="/"
        className={({ isActive }) => 
          isActive ? "bg-white text-black font-medium px-4 py-2 rounded-tl-xl rounded-bl-xl cursor-pointer transition-colors duration-300" 
                   : "hover:bg-white hover:text-black font-medium px-4 py-2 rounded-tl-xl rounded-bl-xl cursor-pointer transition-colors duration-300"
        }
      >
        <motion.p whileHover={{ scale: 1 }} whileTap={{ scale: 0.95 }}>
          Home
        </motion.p>
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => 
          isActive ? "bg-white text-black font-medium px-4 py-2 cursor-pointer transition-colors duration-300" 
                   : "hover:bg-white hover:text-black font-medium px-4 py-2 cursor-pointer transition-colors duration-300"
        }
      >
        <motion.p whileHover={{ scale: 1 }} whileTap={{ scale: 0.95 }}>
          About Us
        </motion.p>
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) => 
          isActive ? "bg-white text-black font-medium px-4 py-2 cursor-pointer transition-colors duration-300" 
                   : "hover:bg-white hover:text-black font-medium px-4 py-2 cursor-pointer transition-colors duration-300"
        }
      >
        <motion.p whileHover={{ scale: 1 }} whileTap={{ scale: 0.95 }}>
          Contact
        </motion.p>
      </NavLink>

      <NavLink
        to="/competitions"
        className={({ isActive }) => 
          isActive ? "bg-white text-black font-medium px-4 py-2 rounded-tr-xl rounded-br-xl cursor-pointer transition-colors duration-300" 
                   : "hover:bg-white hover:text-black font-medium px-4 py-2 rounded-tr-xl rounded-br-xl cursor-pointer transition-colors duration-300"
        }
      >
        <motion.p whileHover={{ scale: 1 }} whileTap={{ scale: 0.95 }}>
          Competitions
        </motion.p>
      </NavLink>
    </motion.nav>
  );
}
