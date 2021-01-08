import React from 'react';
import './Resume.css';

function Resume() {
    const downloadFile = () => {
        window.location.href = 'https://githu';
    }
    return(
        <>
        <h1>My Resume</h1>
        <div className="resume-container">
            <p className="p-resume">Click on the button below to download my resume</p>
            <button className="resume-btn" onClick={downloadFile}>Download</button>
        </div>
        </>
    );
};

export default Resume;