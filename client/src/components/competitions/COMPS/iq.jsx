import React, { useState } from 'react';
import HeaderC from '../../reusable components/header/header';
import Footer from '../../reusable components/footer/footer';
import axios from 'axios';

function Iq() {
    const questions = [
        {
            question: "If a train leaves the station traveling at 60 miles per hour, how far will it travel in 3.5 hours?",
            options: ["180 miles", "200 miles", "210 miles", "250 miles"],
            answer: "210 miles"
        },
        {
            question: "A farmer has 17 sheep, and all but 9 die. How many sheep does he have left?",
            options: ["8", "9", "10", "17"],
            answer: "9"
        },
        {
            question: "What number should come next in the series: 3, 6, 11, 18, 27, ?",
            options: ["36", "38", "39", "42"],
            answer: "38"
        },
        {
            question: "If you divide 30 by half and add 10, what do you get?",
            options: ["70", "80", "90", "100"],
            answer: "70"
        },
        {
            question: "In a certain code language, if 'CAT' is coded as '3120', how is 'DOG' coded?",
            options: ["4157", "6147", "7514", "2405"],
            answer: "4157"
        },
        {
            question: "Which of the following words is the odd one out?",
            options: ["Sky", "Ocean", "River", "Mountain"],
            answer: "Sky"
        },
        {
            question: "What is the next number in the sequence: 1, 4, 9, 16, 25, ?",
            options: ["30", "36", "40", "49"],
            answer: "36"
        },
        {
            question: "A clock shows the time as 3:15. What is the angle between the hour and the minute hands?",
            options: ["45 degrees", "90 degrees", "97.5 degrees", "105 degrees"],
            answer: "97.5 degrees"
        },
        {
            question: "What comes next in the series: A, C, F, J, O, ?",
            options: ["R", "S", "T", "U"],
            answer: "U"
        },
        {
            question: "If the day after tomorrow is Saturday, what day is today?",
            options: ["Thursday", "Friday", "Saturday", "Sunday"],
            answer: "Thursday"
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [studentID, setStudentID] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleAnswer = (option) => {
        if (option === questions[currentQuestion].answer) {
            const newScore = score + 1;
            setScore(newScore);
            localStorage.setItem('score', newScore); // حفظ النقاط في localStorage
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setQuizCompleted(true); 
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const scoreResponse = await axios.post('http://localhost:3000/users/save-score', {
                studentID,
                score,
            });

            if (scoreResponse.status === 200) {
                setSuccessMessage('Score saved successfully!');
                setErrorMessage('');
            }
        } catch (error) {
            setErrorMessage('Error during saving score. Please try again.');
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className='TheBGImage flex-grow'>
                <HeaderC />
                <div className="bg-[#1b1b1b] p-6 rounded-lg shadow-lg w-10/12 text-white mx-auto my-20">
                    <h1 className="text-2xl font-bold text-center mb-4">IQ Quiz</h1>
                    {quizCompleted ? (
                        <div className="text-center">
                            <h2 className="text-xl">Quiz Completed!</h2>
                            <p className="mt-4">Your score: {score} out of {questions.length}</p>
                            <form onSubmit={handleSubmit} className="mt-4">
                                <input
                                    type="text"
                                    placeholder="Student ID"
                                    value={studentID}
                                    onChange={(e) => setStudentID(e.target.value)}
                                    required
                                    className="border text-black p-2 w-full mb-2"
                                />
                                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                                    Submit
                                </button>
                            </form>
                            {successMessage && <p className="text-green-500">{successMessage}</p>}
                            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                        </div>
                    ) : (
                        <div>
                            <h2 className="text-lg">{questions[currentQuestion].question}</h2>
                            <div className="mt-4">
                                {questions[currentQuestion].options.map((option, index) => (
                                    <button
                                        key={index}
                                        className="block w-full bg-blue-500 text-white py-2 px-4 rounded mb-2"
                                        onClick={() => handleAnswer(option)}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <div className='absolute bottom-0 w-full'>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Iq;
