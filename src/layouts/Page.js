import React from 'react';

import WelcomePage from '../components/WelcomePage';
import Profile from '../components/Profile';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Page = () => {
  return (
    <div className='main-page'>
      {<WelcomePage />}
      {<Profile />}
      {<Skills />}
      {<Projects />}
      {<Contact />}
    </div>
  );
}

export default Page;