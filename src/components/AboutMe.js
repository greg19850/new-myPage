import React from 'react';

const AboutMe = () => {
  return (
    <div className='about-me'>
      <div className="personal-section my-info">
        <h3>
          My name is <span>Grzegorz 'Greg' Mrowczynski</span>
        </h3>
        <div className="story my-story">
          I'm originally from Poland, but I've been living in United Kingdom since 2012. I've had successful career in manufacturing, which began from machine operator roles, through Quality Technician, to finally working as Quality Engineer for last 4 years. I have worked for iconic worldwide aerospace and automotive brands, tier one suppliers of Airbus, Bentley, and directly for LEVC, producer of famous London Taxis.
        </div>
      </div>
      <div className="personal-section career-change">
        <div className="story career-change">
          In 2022 I decided to change my career path, and become full time Web Developer. Among my frontend hard skills are: JavaScript, React. My backend hard skills include Node.js, Express and MongoDB. Thanks to soft skills developed during my education and professional career, I can easily adapt to new environments and different programming languages. I have worked as a freelance Web Developer on projects for individual clients. I also rebuilt a website, initially written in HTML/CSS, using React.
        </div>
      </div>
    </div>
  );
}

export default AboutMe;