import TheInput from '../../reusable components/TheInput/TheInput';
import { useState, useRef } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

function SignUpTheFormBody() {
  const [studentID, setStudentID] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isTeamCompetition, setIsTeamCompetition] = useState(false);
  const [selectedCompetitions, setSelectedCompetitions] = useState([]);
  const [teamSelection, setTeamSelection] = useState("");
  const [isSelectionErrorVisible, setIsSelectionErrorVisible] = useState(false); // New state for selection error
  const TheGroup = useRef();

  const handleSignUp = async () => {
    console.log({ studentID, username, email, password, confirmPassword, selectedCompetitions, teamSelection });

    if (password !== confirmPassword) {
        alert("Passwords do not match!"); 
        return;
    }

    if (selectedCompetitions.length === 0) {
        setIsSelectionErrorVisible(true); 
        alert("Please select at least one competition."); 
        return;
    }

    let TheTeam = isTeamCompetition ? "Team" : "Individual";
    let TheSignUpObj = {
        studentID,
        username,
        email,
        password,
        competitionType: TheTeam,
        selectedCompetitions,
        teamSelection: isTeamCompetition ? teamSelection : null,
    };

    console.log('Sign Up Object:', TheSignUpObj);
    setIsSelectionErrorVisible(false); 

    try {
        const apiUrl = isTeamCompetition 
            ? 'http://localhost:3000/users/add-group' 
            : 'http://localhost:3000/users/add'; 
        
        const response = await axios.post(apiUrl, TheSignUpObj);
        console.log(response.data);
        alert("User registered successfully LOGIN NOW !");
    } catch (error) {
        console.error('Error during sign up:', error);
        const errorMessage = error.response 
            ? error.response.data.message 
            : error.message;
        alert(`Error during sign up: ${errorMessage}`); 
    }
};





  const handleCompetitionType = (isTeam) => {
    setIsTeamCompetition(isTeam);
  };

  const handleCompetitionCheckbox = (competition) => {
    setSelectedCompetitions((prev) =>
      prev.includes(competition)
        ? prev.filter((item) => item !== competition)
        : [...prev, competition]
    );

    if (isSelectionErrorVisible) {
      setIsSelectionErrorVisible(false);  
    }
  };

  const handleTeamSelection = (team) => {
    setTeamSelection(team);
  };

  const TheValueOfComCards = [
    {
      icon: 'fa-regular fa-circle-check',
      title: "Solve the Code problem"
    },
    {
      icon: 'fa-solid fa-cube',
      title: "Solve the Rubik's cube"
    },
    {
      icon: 'fa-solid fa-vial-virus',
      title: "Penetration testing"
    },
    {
      icon: 'fa-solid fa-brain',
      title: "Solve IQ Questions"
    }
  ];

  const MapTheCards = TheValueOfComCards.map((ele) => {
    const TheClassValue = `${ele.icon} text-5xl mb-2`;
    return (
      <div className='flex gap-5 flex-wrap' key={ele.title}>
        <div className="checkbox-wrapper-16 block h-full">
          <label className="checkbox-wrapper">
            <input
              type="checkbox"
              className="checkbox-input"
              onChange={() => handleCompetitionCheckbox(ele.title)}
              checked={selectedCompetitions.includes(ele.title)}
            />
            <span className="checkbox-tile px-24 py-10">
              <span className="checkbox-icon">
                <i className={TheClassValue}></i>
              </span>
              <span className="w-28 checkbox-label">{ele.title}</span>
            </span>
          </label>
        </div>
      </div>
    );
  });

  return (
    <div className='select-none TheGlassFormEFF bg-[#151515] w-full md:w-8/12 lg:w-6/12 xl:w-5/12 rounded-2xl mx-auto my-20 p-7 md:p-7'>
      <div className="TheBody">
        <h2 className='text-2xl md:text-3xl font-medium'>Sign Up</h2>
        <p className='block text-sm md:text-md font-thin mt-2 text-[#ffffffbb]'>
          Welcome, enter the following information and choose whether you want to be alone or with a team
        </p>

        <div className="TheInputs my-4 md:my-8">
          <TheInput
            headText="Student ID"
            type="text"
            placeholder="Enter your Student ID"
            onChange={(e) => setStudentID(e.target.value)}
          />
          <TheInput
            headText="Username"
            type="text"
            placeholder="Enter your Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TheInput
            headText="Email"
            type="email"
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TheInput
            type="password"
            placeholder="Enter your password"
            TitleOfPass="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <TheInput
            type="password"
            placeholder="Enter your password Again"
            TitleOfPass="Rewrite password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="flex justify-center my-6">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 text-md font-medium text-white bg-[#1b1b1b] border border-gray-700 rounded-l-lg hover:bg-[#1b1b1bab] focus:z-10 focus:ring-2 focus:ring-gray-500"
              onClick={() => handleCompetitionType(false)}
            >
              <i className="fas fa-user mr-2"></i>
              Individual Competitions
            </button>
            <button
              type="button"
              className="inline-flex items-center px-8 py-2 text-md font-medium text-white bg-[#1b1b1b] border border-gray-700 rounded-r-lg hover:bg-[#1b1b1bab] focus:z-10 focus:ring-2 focus:ring-gray-500"
              onClick={() => handleCompetitionType(true)}
            >
              <i className="fas fa-users mr-2"></i>
              Team Competitions
            </button>
          </div>
        </div>

        <div className="TheCardsParnt flex flex-wrap gap-6 mb-10 w-full justify-center">
          {MapTheCards}
          <div className='flex gap-5 flex-wrap'>
            <div className="checkbox-wrapper-16 block h-full">
              <label className="checkbox-wrapper">
                <input
                  type="checkbox"
                  className="checkbox-input"
                  onChange={() => handleCompetitionCheckbox("Photography competition")}
                  checked={selectedCompetitions.includes("Photography competition")}
                />
                <span className="checkbox-tile px-52 py-10">
                  <span className="checkbox-icon">
                    <i className="fa-solid text-5xl mb-2 fa-camera"></i>
                  </span>
                  <span className="w-28 checkbox-label">Photography competition</span>
                </span>
              </label>
            </div>
          </div>
        </div>

        {isTeamCompetition && (
          <div className="Team" ref={TheGroup}>
            <div className="flex items-center mt-7 mb-5">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-2 text-gray-500">Choose your team</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="my-10 grid grid-cols-4 grid-rows-1 text-center rounded-md shadow-sm" role="group">
              {["One", "Two", "Three", "Four"].map((team) => (
                <button
                  key={team}
                  type="button"
                  onClick={() => handleTeamSelection(team)}
                  className={`justify-center inline-flex items-center px-3 py-2 text-md font-medium text-white bg-[#1b1b1b] border border-gray-700 hover:bg-[#1b1b1bab] focus:z-10 focus:ring-2 focus:ring-gray-500 ${teamSelection === team ? "bg-[#81a3ad]" : ""
                    }`}
                >
                  <i className="fas fa-users mr-2"></i>
                  {team}
                </button>
              ))}
            </div>
          </div>
        )}

        {isSelectionErrorVisible && (
          <p className='text-red-500 mb-4'>Please select at least one competition.</p>
        )}

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

        <p className="text-center text-sm md:text-md">
          Already have an account?
          <Link to="/login" className="underline text-[#81a3ad] ml-1">Log In</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpTheFormBody;
