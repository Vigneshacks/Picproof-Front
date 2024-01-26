import React, { useState } from 'react';

const Keys = () => {
    const [apiKey, setApiKey] = useState('');

    const generateApiKey = async () => {
        try {
            const response = await fetch('/api/generateApiKey', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setApiKey(data.apiKey);
        } catch (error) {
            console.error('Error generating API key:', error);
        }
    };

    return (
        <div>
            <button onClick={generateApiKey}>Generate API Key</button>
            {apiKey && <p>API Key: {apiKey}</p>}
        </div>
    );
};

export default Keys;
