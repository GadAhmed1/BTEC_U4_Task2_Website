import React from 'react';
import { Link } from 'react-router-dom';
import TheTable from './TheInfoTable'
function TheComptions() {
    const competitions = [
        {
            id: 1,
            title: "IQ Questions",
            imageUrl: "./assets/images/IQ.png",
            description: "Test your intelligence with various IQ questions.",
        },
        {
            id: 2,
            title: "Penetration Testing",
            imageUrl: "./assets/images/PT.png",
            description: "Learn about penetration testing techniques.",
        },
        {
            id: 3,
            title: "Rubik's Cube",
            imageUrl: "./assets/images/rc.avif",
            description: "Challenge yourself with the Rubik's Cube.",
        },
        {
            id: 4,
            title: "Problem Solving",
            imageUrl: "./assets/images/ThePMs.webp",
            description: "Enhance your problem-solving skills.",
        },
        {
            id: 5,
            title: "Best Photographer",
            imageUrl: "./assets/images/camera-cartoon-vector-illustration-with-modern-colors_500021-348.avif",
            description: "Show your photography skills and creativity.",
        },
    ];

    return (
        <div className="flex justify-center my-20 mx-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {competitions.map(competition => (
                    <div key={competition.id} className="max-w-sm bg-[#1b1b1b] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <Link to={`/competitions/${competition.id}`}>
                            <img
                                className="rounded-t-lg h-64 w-full object-cover"
                                src={competition.imageUrl}
                                alt={competition.title}
                            />
                        </Link>
                        <div className="p-5">
                            <Link to={`/competitions/${competition.id}`}>
                                <h5 className="text-center text-white mb-2 text-2xl font-bold tracking-tight">{competition.title}</h5>
                            </Link>
                            <div className="text-center mt-5">
                                <Link to={`/competitions/${competition.id}`} className="mx-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 text-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TheComptions;
