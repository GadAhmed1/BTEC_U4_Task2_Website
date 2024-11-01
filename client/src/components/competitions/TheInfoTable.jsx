import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataTable = ({ isGroup }) => {
    const [data, setData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [teamScores, setTeamScores] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const endpoint = isGroup ? 'http://localhost:3000/users/groups' : 'http://localhost:3000/users/individual';
                const response = await axios.get(endpoint);
                const sortedData = response.data.sort((a, b) => b.score - a.score);
                
                // Calculate total score for each team if in group mode
                if (isGroup) {
                    const teamOneScore = sortedData
                        .filter(item => item.teamSelection === 'One')
                        .reduce((acc, item) => acc + item.score, 0);
                    const teamTwoScore = sortedData
                        .filter(item => item.teamSelection === 'Two')
                        .reduce((acc, item) => acc + item.score, 0);
                    const teamThreeScore = sortedData
                        .filter(item => item.teamSelection === 'Three')
                        .reduce((acc, item) => acc + item.score, 0);
                    const teamFourScore = sortedData
                    .filter(item => item.teamSelection === 'four')
                    .reduce((acc, item) => acc + item.score, 0);
                    setTeamScores({
                        'Team One': teamOneScore,
                        'Team Two': teamTwoScore,
                        'Team Three': teamThreeScore,
                        'Team four': teamThreeScore,
                    });
                }

                setData(sortedData);
            } catch (error) {
                setErrorMessage('Error fetching data: ' + error.message);
            }
        };

        fetchData();
    }, [isGroup]);

    return (
        <div className="overflow-x-auto w-10/12 mx-auto mt-10 text-center">
            <h1 className='mb-5 text-xl'>{isGroup ? 'Group Contestants' : 'Individual Contestants'}</h1>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            <table className="min-w-full bg-gray-800 text-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Rank</th>
                        {isGroup && <th className="py-2 px-4 border-b">Team Selection</th>}
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item.id} className="hover:bg-gray-700">
                            <td className="py-2 px-4 border-b">{index + 1}</td> {/* Rank */}
                            {isGroup && <td className="py-2 px-4 border-b">{item.teamSelection}</td>}
                            <td className="py-2 px-4 border-b">{item.username}</td>
                            <td className="py-2 px-4 border-b">{item.score}</td>
                        </tr>
                    ))}

                    {/* Add team total rows at the end of the table if in group mode */}
                    {isGroup && (
                        <>
                            <tr className="bg-gray-700">
                                <td colSpan="3" className="py-2 px-4 border-b font-bold">Total for Team One</td>
                                <td className="py-2 px-4 border-b font-bold">{teamScores['Team One']}</td>
                            </tr>
                            <tr className="bg-gray-700">
                                <td colSpan="3" className="py-2 px-4 border-b font-bold">Total for Team Two</td>
                                <td className="py-2 px-4 border-b font-bold">{teamScores['Team Two']}</td>
                            </tr>
                            <tr className="bg-gray-700">
                                <td colSpan="3" className="py-2 px-4 border-b font-bold">Total for Team Three</td>
                                <td className="py-2 px-4 border-b font-bold">{teamScores['Team Three']}</td>
                            </tr>
                            <tr className="bg-gray-700">
                                <td colSpan="3" className="py-2 px-4 border-b font-bold">Total for Team Four</td>
                                <td className="py-2 px-4 border-b font-bold">{teamScores['Team four']}</td>
                            </tr>
                        </>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
