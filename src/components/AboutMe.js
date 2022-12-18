import React from 'react';

const AboutMe = () => {
  return (
    <div className='about-me'>
      <div className="fieldset my-info">
        <h3>
          My name is <span>Grzegorz 'Greg' Mrowczynski</span>
        </h3>
        <div className="story about-me">
          I'm originally from Poland, but I've been living in United Kingdom since 2012. I've had successful career in manufacturing, which began from machine operator roles, through Quality Technician, to finally working as Quality Engineer for last 4 years. I have worked for iconic worldwide aerospace and automotive brands, tier one suppliers of Airbus, Bentley, and directly for LEVC, producer of famous London Taxis.
        </div>
      </div>
      <div className="fieldset career-change">
        <h3>
          Change of career path
        </h3>
        <div className="story career-change">
          Since end of 2021 I've been learning, practicing and working as freelance Web Developer. My hard skills include JavaScript, React, Typescript. Thanks to soft skills developed during my education and professional career, I can easily adapt to new environments and different programming languages. So far I have worked on web design projects for few individuals, with use of frontend technologies: JavaScript, React, CSS. I also rebuilt one client's site, initially written in HTML/CSS, using React.
        </div>
      </div>
    </div>
  );
}

export default AboutMe;