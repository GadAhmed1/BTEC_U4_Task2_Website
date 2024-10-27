import TheInput from '../../reusable components/TheInput/TheInput';
import { useState } from 'react';
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
function signUpTheFormBody() {
  const [studentID, setStudentID] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  
  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setIsErrorVisible(true);
    } else {
      setIsErrorVisible(false);
      console.log("Student ID:", studentID);
      console.log("Password:", password);
    }
  };

  return (
    <div className='select-none TheGlassFormEFF bg-[#151515] w-full md:w-8/12 lg:w-6/12 xl:w-5/12 rounded-2xl mx-auto my-20 p-7 md:p-7'>
      <div className="TheBody">
        <h2 className='text-2xl md:text-3xl font-medium'>Sign Up</h2>
        <p className='block text-sm md:text-md font-thin mt-2 text-[#ffffffbb]'>Welcome, enter the following information and choose whether you want to be alone or with a team</p>

        <div className="TheInputs my-4 md:my-8">
          <TheInput
            headText="Student ID"
            type="email"
            placeholder="Enter your Student ID"
            onChange={(e) => setStudentID(e.target.value)}
          />
          {isErrorVisible && <p className='text-red-500'>The passwords do not match</p>}

          <TheInput
            headText="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <TheInput
            headText="Confirm Password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-center my-6 ">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button 
            type="button" 
            className="inline-flex items-center px-3 py-2 text-md font-medium text-white bg-[#1b1b1b] border border-gray-700 rounded-l-lg hover:bg-[#1b1b1bab] focus:z-10 focus:ring-2 focus:ring-gray-500">
              <i className="fas fa-user mr-2"></i>
              Individual Competitions
            </button>
            <button 
            type="button" 
            className="inline-flex items-center px-8 py-2 text-md font-medium text-white bg-[#1b1b1b] border border-gray-700 rounded-r-lg hover:bg-[#1b1b1bab] focus:z-10 focus:ring-2 focus:ring-gray-500">
              <i className="fas fa-users mr-2"></i>
              Team Competitions
            </button>
          </div>
        </div>
        
        <button
          onClick={handleSignUp}
          className="w-full p-2 md:p-3 text-lg md:text-xl rounded-xl bg-[#81a3ad] hover:bg-[#81a3adb9] transition-all active:bg-[#81a3ad70]"
        >
          Sign Up
        </button>

        <div className="flex items-center mt-7 mb-5">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>




        <p className="text-center text-sm md:text-md">Already have an account?
          <Link to="/login" className="underline text-[#81a3ad] ml-1">Log In</Link>
        </p>
      </div>
    </div>
  );
}

export default signUpTheFormBody;
