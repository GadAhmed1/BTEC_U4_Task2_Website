import TheInput from '../../reusable components/TheInput/TheInput';
import { useState } from 'react';
import { Link } from "react-router-dom";

function signUpTheFormBody() {
  let [TheEmailValue, SetEmailValue] = useState("");
  let [ThePassValue, SetPassValue] = useState("");
  let [TheVispalOfERR, SetTheVispalOfERR] = useState(false);
  return (
    <div className='select-none TheGlassFormEFF bg-[#151515] w-full md:w-8/12 lg:w-6/12 xl:w-5/12 rounded-2xl mx-auto my-20 p-7 md:p-7'>
      <div className="TheBody">
        <h2 className='text-2xl md:text-3xl font-medium'>Login to your account</h2>
        <p className='block text-sm md:text-md font-thin mt-2 text-[#ffffffbb]'>Welcome back, please enter your data</p>

        <div className="TheInputs my-4 md:my-8">
          <TheInput
            onChange={(e) => {
              SetEmailValue(e.target.value);
            }}
            headText="Student ID"
            type="email"
            placeholder="Enter your Student ID"
          />
          {
            TheVispalOfERR == true ? (<p className='text-red-500'>The password Is incorrect</p>
            ) : ( <p></p> )
          }
          <TheInput
            TitleOfPass="Password"
            onChange={(e) => {
              SetPassValue(e.target.value);
            }}
            type="password"
          />
          {

            TheVispalOfERR == true ? (<p className='text-red-500'>The password Is incorrect</p>
            ) : (<p></p>)
          }
        </div>

        <button
          onClick={() => {
            console.log({ TheEmailValue, ThePassValue });
          }}
          className="w-full p-2 md:p-3 text-lg md:text-xl rounded-xl bg-[#81a3ad] hover:bg-[#81a3adb9] transition-all active:bg-[#81a3ad70]"
        >
          Log In
        </button>

        <div className="flex items-center mt-7 mb-5">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <p className="text-center text-sm md:text-md">Don't have an account?
          <Link to="/signup" className="underline text-[#81a3ad] ml-1">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default signUpTheFormBody;
