import React, { useState } from 'react';
import './Education.css';

const About = () => {
  const [language, setLanguage] = useState('English');

  const handleLanguageChange = () => {
    setLanguage(language === 'English' ? 'French' : 'English');
  };

  return (
    <div className="about-layout2">
      <div className="left-bar2"></div>
      <div className="about-container">
        <div className="about-header">
          <h2>
            <strong>Education</strong>
          </h2>
          <hr className="about-line" />
        </div>

        {/* Main content below the line */}
        <div className="about-bottom">
          {/* Left Text Section */}
          <div className="about-left2">
          <section id="education" className="mt-12">
                <div>
                    <h3>Bachelor of Software Engineering - University of Ottawa </h3>
                    <p>September 2021 - April 2025</p>
                    <ul>
                    Currently pursuing a Bachelor of Software Engineering at the University of Ottawa, [User] is on track to graduate in April 2025. Throughout their academic journey, they have developed a solid foundation in software engineering principles, focusing on problem-solving, system design, and programming excellence. Their coursework has equipped them with expertise in both theoretical concepts and practical applications, covering advanced areas such as database design, object-oriented development, and web technologies. This rigorous program has also honed their collaboration skills, enabling them to contribute effectively to team-based projects and complex software initiatives.
                    </ul>
                </div>
                <div className="mt-6">
                    <h3>Full Stack Developer Intern - ABC Corp</h3>
                    <p>March 2022 - May 2023</p>
                    <ul>
                    <li>
                        Developed features for the company’s internal admin panel, using React for the front-end and Python for the back-end.
                    </li>
                    <li>
                        Worked on API integrations, reducing data retrieval time by 20%.
                    </li>
                    </ul>
                </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
