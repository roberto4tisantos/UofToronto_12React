// import React from 'react';
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Resume.css'

const Resume = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <a href="/path-to-your-resume.pdf" download>Download Resume</a>
      <ul>
        <li>JavaScript, React, Node.js, HTML/CSS</li>
        <li>Git, Webpack, RESTful APIs</li>
        <li>Problem-solving and debugging skills</li>
        {/* Add more skills */}
      </ul>
    </section>
  );
};

export default Resume;