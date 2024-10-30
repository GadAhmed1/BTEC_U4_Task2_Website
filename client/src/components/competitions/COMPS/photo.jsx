import React, { useState } from 'react';
import axios from 'axios';
import Header from '../../reusable components/header/header';
import Footer from '../../reusable components/footer/footer';

function Photo() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadMessage, setUploadMessage] = useState('');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            setUploadMessage('Please select a file before uploading.');
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            const response = await axios.post('http://localhost:3000/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setUploadMessage(response.data.message);
            setSelectedFile(null);
        } catch (error) {
            setUploadMessage('Error uploading the file. Please try again.');
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className='TheBGImage flex-grow'>
                <Header />
                <div className="flex flex-col items-center justify-center mt-20">
                    <h1 className="text-2xl font-bold text-white mb-4">Upload Image</h1>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="block mb-4 text-white border border-gray-600 rounded"
                    />
                    <button
                        onClick={handleUpload}
                        className="bg-blue-500 text-white py-2 px-4 rounded"
                    >
                        Upload
                    </button>
                    {uploadMessage && <p className="mt-4 text-center text-white">{uploadMessage}</p>}
                </div>
                <div className='absolute bottom-0 w-full'>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Photo;
