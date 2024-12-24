// src/components/Experience.js

import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="mt-12">
      <h2>Experience</h2>
      <div>
        <h3>Software Engineer Intern - XYZ Company</h3>
        <p>June 2023 - Present</p>
        <ul>
          <li>
            Contributed to the development of a task management web application using React and Node.js.
          </li>
          <li>
            Optimized SQL queries, resulting in a 30% improvement in performance for the database.
          </li>
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
  );
};

export default Experience;
