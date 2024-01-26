import React, { useState } from 'react';

const Works = () => {
    const [work, setWork] = useState(null);

    const handleAddWork = () => {
        // Add logic to store the user work in storage
        // For example, you can use localStorage or send a request to a server
        // You can replace the console.log with your actual storage logic
        console.log('Adding work to storage:', work);
        // Add logic to upload the document file here
        // For example, you can use a file upload library or send a request to a server
        // You can replace the console.log with your actual file upload logic
        console.log('Uploading document file:', work);
    };

    return (
        <div>
            <h1>Upload</h1>
            <input
                type="file"
                onChange={(e) => setWork(e.target.files[0])}
            />
            <button onClick={handleAddWork}>Add Work</button>
        </div>
    );
};

export default Works;
