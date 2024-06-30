import React from 'react';
import resumeImage1 from '../assets/img/1.jpg';
import resumeImage2 from '../assets/img/2.jpg';

function Resume() {
  const handleDownloadResume = () => {
    // Logique pour télécharger le PDF du CV
    // Vous pouvez utiliser une bibliothèque comme `file-saver` pour faciliter le téléchargement
    window.open('/D:/Downloads/CV Salma Makina.pdf', '_blank');
  };

  return (
    <div className="resume-page">
      <h1>My Resume</h1>
      <div className="resume-images">
        <img src={resumeImage1} alt="Resume Page 1" />
        <img src={resumeImage2} alt="Resume Page 2" />
      </div>
      <button className="download-btn" onClick={handleDownloadResume}>
        Download Resume
      </button>
    </div>
  );
}

export default Resume;