import React, { useState, useEffect } from 'react';
import HeaderC from '../../reusable components/header/header';
import Footer from '../../reusable components/footer/footer';
import axios from 'axios';

function Timer() {
    const [milliseconds, setMilliseconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [username, setUsername] = useState('');
    const [showInput, setShowInput] = useState(false);
    const [errorMessage, setErrorMessage] = useState(''); 

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setMilliseconds((prevMilliseconds) => prevMilliseconds + 100);
            }, 100);
        } else if (!isActive && milliseconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, milliseconds]);

    const handleStart = () => {
        setIsActive(true);
        setShowInput(false);
        setMilliseconds(0);
        setErrorMessage(''); 
    };

    const handleStop = () => {
        setIsActive(false);
        setShowInput(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const score = calculateScore(milliseconds);
            const response = await axios.post('http://localhost:3000/users/save-score', {
                studentID: username,
                score
            });
            console.log('Points saved:', response.data);
            setShowInput(false);
            setUsername('');
            setErrorMessage(''); 
        } catch (error) {
            setErrorMessage('Error saving points: ' + error.message);
            console.error('Error saving points:', error.message);
        }
    };

    // دالة لحساب النقاط بناءً على الوقت
    const calculateScore = (ms) => {
        const totalSeconds = Math.floor(ms / 1000);
        if (totalSeconds <= 60) {
            return 10; // 10 نقاط في أول دقيقة
        } else {
            const extraSeconds = totalSeconds - 60;
            return 10 + extraSeconds * 5; // 5 نقاط لكل ثانية بعد الدقيقة الأولى
        }
    };

    const formatTime = (ms) => {
        const totalSeconds = Math.floor(ms / 1000);
        const seconds = totalSeconds % 60;
        const minutes = Math.floor(totalSeconds / 60);
        const milliseconds = ms % 1000;

        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}.${Math.floor(milliseconds / 100)}`;
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className='TheBGImage flex-grow'>
                <HeaderC />
                <div className="bg-[#1b1b1b] p-6 rounded-lg shadow-lg w-10/12 text-white mx-auto my-20">
                    <h1 className="text-2xl font-bold text-center mb-4">Timer</h1>
                    <div className="text-center mb-4">
                        <h2 className="text-xl">{formatTime(milliseconds)}</h2>
                    </div>
                    <div className="flex justify-center mb-4">
                        <button onClick={handleStart} className="bg-blue-500 text-white py-2 px-4 rounded mr-2">
                            Start
                        </button>
                        <button onClick={handleStop} className="bg-red-500 text-white py-2 px-4 rounded">
                            Stop
                        </button>
                    </div>
                    {showInput && (
                        <form onSubmit={handleSubmit} className="mt-4">
                            <input
                                type="text"
                                placeholder="Enter your StudentId"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="border text-black p-2 w-full mb-2"
                            />
                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                                Submit
                            </button>
                            {errorMessage && (
                                <div className="text-red-500 mt-2">
                                    {errorMessage}
                                </div>
                            )}
                        </form>
                    )}
                </div>
                <div className='absolute bottom-0 w-full'>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Timer;
