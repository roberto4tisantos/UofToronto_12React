/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Portfolio.css';

//Invoke Portfolio 
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <p>Are you smarter than a fifth grader?</p>       
      <img src="/path-to-your-photo.jpg" alt="UofT" />

      <div className="links">
        <a href="https://shumanji7.github.io/Project-1-Best/"         
           target="_blank" 
           rel="noopener noreferrer"
        >
          View Project 1 (Live)
        </a>
        <a href="https://github.com/shumanji7/Project-1-Best.git"
           target="_blank" 
           rel="noopener noreferrer"
        >
          View Project 1 (Code)
        </a>
      </div>
      {/* Add more projects as needed */}
    </section>
  );
};

export default Portfolio;