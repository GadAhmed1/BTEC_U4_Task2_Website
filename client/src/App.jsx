import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePages from "./components/HomePage/homePage.jsx";
import AboutUsPage from "./components/AboutUsPage/AboutUsPage.jsx";
import ContactUs from './components/Contact/Contact.jsx'
import LoginForm from './components/LogSign_page/Login/LoginBody.jsx';
import SignUpForm from './components/LogSign_page/signUp/signUpBody.jsx';
import Comp from './components/competitions/competitions.jsx';
import IqQ from './components/competitions/COMPS/iq.jsx';
import PTS from './components/competitions/COMPS/PT.jsx';
import RB from './components/competitions/COMPS/RB.jsx';
import PS from './components/competitions/COMPS/ps.jsx';
import UImage from './components/competitions/COMPS/photo.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* <Route path="/login" element={<LoginForm />} /> */}
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/competitions" element={<Comp />} />
        <Route path="competitions/1" element={<IqQ />} />
        <Route path="competitions/2" element={<PTS />} />
        <Route path="competitions/3" element={<RB />} />
        <Route path="competitions/4" element={<PS />} />
        <Route path="competitions/5" element={<UImage />} />
      </Routes>
    </Router>
  );
}

export default App;
