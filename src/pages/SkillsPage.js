import React from 'react';

import SkillsCollection from '../components/SkillsCollection';

import '../styles/Skills.scss'

const SkillsPage = () => {
  return (
    <div id='skills' className='skills-container'>
      <h2>My Skills:</h2>
      {<SkillsCollection />}
    </div>
  );
}

export default SkillsPage;