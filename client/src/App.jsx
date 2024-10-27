import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePages from "./components/HomePage/homePage.jsx";
import AboutUsPage from "./components/AboutUsPage/AboutUsPage.jsx";
import ContactUs from './components/Contact/Contact.jsx'
import LoginForm from './components/LogSign_page/Login/LoginBody.jsx';
import SignUpForm from './components/LogSign_page/signUp/signUpBody.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </Router>
  );
}

export default App;
