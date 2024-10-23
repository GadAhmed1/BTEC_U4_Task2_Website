import Logo from './logoPart';
import Nav from './Nav';
import {motion} from 'framer-motion'
import LoginBTN from './loginBTN';

function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -80 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }} 
      className="TheHeader flex flex-col sm:flex-row items-center justify-between m-2 mt-0 p-2 gap-2 ">
      
      <div className="hidden sm:block">
        <Logo />
      </div>
      <Nav />
      <LoginBTN />

    </motion.div>
  );
}

export default Header;
