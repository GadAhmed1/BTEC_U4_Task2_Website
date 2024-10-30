import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataTable = ({ isGroup }) => {
    const [data, setData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const endpoint = isGroup ? 'http://localhost:3000/users/groups' : 'http://localhost:3000/users/individual';
                const response = await axios.get(endpoint);
                const sortedData = response.data.sort((a, b) => b.score - a.score);
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
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item.id} className="hover:bg-gray-700">
                            <td className="py-2 px-4 border-b">{index + 1}</td> {/* Rank */}
                            <td className="py-2 px-4 border-b">{item.username}</td>
                            <td className="py-2 px-4 border-b">{item.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
