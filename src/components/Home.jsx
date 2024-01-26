import React, { useState } from 'react';

const Home = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFormat, setSelectedFormat] = useState('');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleFormatChange = (event) => {
        setSelectedFormat(event.target.value);
    };

    const handleUpload = () => {
        // Handle file upload logic here
        console.log('Selected File:', selectedFile);
        console.log('Selected Format:', selectedFormat);
    };

    return (
        <div className='home'>
            <input type="file" onChange={handleFileChange} />
            <select value={selectedFormat} onChange={handleFormatChange}>
                <option value="">Select Format</option>
                <option value="jpg">JPG</option>
                <option value="png">PNG</option>
                <option value="gif">GIF</option>
            </select>
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default Home;
