import React from 'react';
import resumeImage1 from '../assets/img/1.jpg';
import resumeImage2 from '../assets/img/2.jpg';

function Resume( {contactRef}) {
    const resumeUrl = 'https://drive.google.com/file/d/1tkKqVvUMVOT-UQXWMQCZiuoNAn1QHCWK/view?usp=drive_open&edoph=true';
    
    return (
        <div className="resume-page" id='resume-section'>
        <h1>My Resume</h1>
        <div className="resume-images">
            <img src={resumeImage1} alt="Resume Page 1" />
            <img src={resumeImage2} alt="Resume Page 2" />
        </div>
        <button className="download-btn" onClick={() => window.open(resumeUrl, '_blank')}>
        Download Resume
        </button>
        </div>
    );
}

export default Resume;