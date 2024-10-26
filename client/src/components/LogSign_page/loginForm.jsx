import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import HeaderC from '../reusable components/header/header';
import Footer from '../reusable components/footer/footer';
import { NavLink } from 'react-router-dom';

export default function LoginForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [studentID, setStudentID] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (studentID !== '1' || password !== '1') {
      console.error();
      setError('Incorrect Student ID or Password');
    } else {
      let TheOBJ = {
        studentID,
        password
      }
      console.log(TheOBJ)
      console.log('Login successful');
      setError('');
    }
  };

  return (
    <div className='TheBGImage flex-grow'>
      <HeaderC />
      <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br relative">
        {/* Background */}
        <div className="absolute inset-0 bg-cover bg-center filter blur-lg" style={{ backgroundImage: `url('path_to_your_image.jpg')` }}></div>

        {/* Glassy Card */}
        <div className="relative z-10 w-96 p-12 bg-white bg-opacity-10 rounded-xl shadow-lg backdrop-filter backdrop-blur-lg border border-white border-opacity-20">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">Login</h2>

          <form onSubmit={handleLogin}>
            {/* Student ID Input */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Student ID"
                className={`w-full px-5 py-4 bg-white bg-opacity-20 text-white placeholder-gray-300 rounded-lg focus:outline-none ${error ? 'border-red-500' : ''}`}
                value={studentID}
                onChange={(e) => setStudentID(e.target.value)}
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>

            {/* Password Input with Eye Icon */}
            <div className="relative mb-4">
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Password"
                className={`w-full px-5 py-4 bg-white bg-opacity-20 text-white placeholder-gray-300 rounded-lg focus:outline-none ${error ? 'border-red-500' : ''}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-opacity-70"
              >
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
              </button>
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-4 bg-white bg-opacity-20 text-white font-semibold rounded-lg hover:bg-opacity-40 transition duration-300"
            >
              Login
            </button>

            {/* Register Link */}
            <p className="text-center text-gray-300 text-sm mt-6">
              Don't have an account?{' '}
              <NavLink to="/signup" className="text-white hover:underline">
                Sign up
              </NavLink>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
