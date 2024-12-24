import React, { useState } from 'react';
import './About.css';
import selfie from '../pictures/selfie.png';

const About = () => {
  const [language, setLanguage] = useState('English');
  const [showMenu, setShowMenu] = useState(false);

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setShowMenu(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="about-layout">
      {/* Left Bar */}
      <div className="left-bar">
        {/* Your left bar content */}
        <h4>Contents</h4>
        <ul>
          <li><a href="#About">About</a></li>
          <li><a href="#section2">Education</a></li>
          <li><a href="#section2">Experience</a></li>
          <li><a href="#section2">Tech Stack</a></li>
          <li><a href="#section2">Volunteering</a></li>
          <li><a href="#section2">Extracurricular Activities</a></li>
        </ul>
      </div>

      <div className="about-container">
        <div className="about-header">
          <h2>
            <strong>Ichrak El Hatimi</strong>
            <span className="languages" onClick={toggleMenu}>
              2 Languages <span className="arrow">↓</span>
            </span>
          </h2>
          <hr className="about-line" />
        </div>

        {/* Language selection menu */}
        {showMenu && (
          <div className="language-menu">
            <ul>
              <li onClick={() => handleLanguageChange('English')}>English</li>
              <li onClick={() => handleLanguageChange('French')}>French</li>
            </ul>
          </div>
        )}

        <div className="about-bottom">
          <div className="about-left">
            <p>
              Ichrak El Hatimi (born [insert birthdate]) is a highly driven software engineering student at the University of Ottawa, set to graduate in April 2025. Known for her strong academic foundation and practical experience in software engineering, she has completed multiple internships at leading global companies, including Morgan Stanley, Motorola Solutions, and Eurafric Information. Her work focuses primarily on Java backend development, system monitoring, and leveraging big data tools, alongside a keen interest in roles that foster collaboration and interaction with people.

              Born and raised in [insert location], El Hatimi's academic and professional journey demonstrates her relentless pursuit of excellence. She gained valuable industry experience during her time at Morgan Stanley, where she played a key role in developing a chat parser for Bloomberg's trading platform. This project utilized ElasticSearch and natural language processing (NLP) to efficiently manage over 100,000 messages daily. At Motorola Solutions, she showcased her versatility by mastering the ELK stack (ElasticSearch, Logstash, and Kibana) for analyzing search logs and implementing proactive monitoring systems via ScienceLogic, ultimately resolving more than 50 critical incidents.

              El Hatimi's passion for problem-solving extends beyond technical solutions. With her collaborative mindset and detail-oriented approach, she thrives in environments requiring innovative thinking and teamwork. Despite her strong technical background in Java backend systems, she is currently seeking opportunities where interpersonal interactions, creativity, and collaboration take center stage.

              A proactive learner and adaptable team player, El Hatimi represents the next generation of software engineers ready to tackle challenges with determination and grace.
            </p>
          </div>
          <div className="about-right">
            <div className="about-right-content">
              <div className="logo-container">
                <img src={selfie} alt="selfie" className="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
