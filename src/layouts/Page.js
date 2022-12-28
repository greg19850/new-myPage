import React from 'react';

import WelcomePage from '../pages/WelcomePage';
import ProfilePage from '../pages/ProfilePage';
import SkillsPage from '../pages/SkillsPage';
import ProjectsPage from '../pages/ProjectsPage';
import ContactPage from '../pages/ContactPage';

const Page = () => {
  return (
    <div className='main-page'>
      {<WelcomePage />}
      {<ProfilePage />}
      {<SkillsPage />}
      {<ProjectsPage />}
      {<ContactPage />}
    </div>
  );
}

export default Page;