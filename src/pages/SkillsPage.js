import React from 'react';

import Container from 'react-bootstrap/Container';

import SkillsCollection from '../components/SkillsCollection';

import '../styles/Skills.scss'

const SkillsPage = () => {
  return (
    <Container id='skills' className='skills-container py-4'>
      <h2 className='mb-3'>My Skills</h2>
      {<SkillsCollection />}
    </Container>
  );
}

export default SkillsPage;