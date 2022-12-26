import React from 'react';

import SkillsCollection from './SkillsCollection';

import '../styles/Skills.scss'

const Skills = () => {
  return (
    <div id='skills' className='skills-container'>
      <h2>My Skills:</h2>
      {<SkillsCollection />}
    </div>
  );
}

export default Skills;