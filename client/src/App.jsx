import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePages from "./components/HomePage/homePage.jsx";
import AboutUsPage from "./components/AboutUsPage/AboutUsPage.jsx";
import ContactUs from './components/Contact/Contact.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
