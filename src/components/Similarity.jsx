import React, { useState } from 'react';
import image1 from '../assets/react.svg';
import image2 from '../assets/react.svg';

const Similarity = () => {
    const [similarityLevel, setSimilarityLevel] = useState(0);

    const handleCompareImages = () => {
        // Logic to compare the two images and calculate the similarity level
        const similarity = calculateSimilarity(image1, image2); // Replace image1 and image2 with your image variables

        setSimilarityLevel(similarity);
    };

    return (
        <div>
            <h1>Image Similarity Comparison</h1>
            <div>
                <img src={image1} alt="Image 1" />
                <img src={image2} alt="Image 2" />
            </div>
            <button onClick={handleCompareImages}>Compare Images</button>
            <div>
                <div>Similarity Level: {similarityLevel}%</div>
                <div>
                    <div style={{ width: '100%', backgroundColor: '#ccc' }}>
                        <div
                            style={{
                                width: `${similarityLevel}%`,
                                backgroundColor: '#00cc00',
                                height: '20px',
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Similarity;
