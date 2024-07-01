import Resume from './Resume';
import { Contact } from './Contact';
import { useEffect } from 'react';

const ResumeLayout = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div id="resume-section">
      <Resume />
    </div>
  );
};

export default ResumeLayout;