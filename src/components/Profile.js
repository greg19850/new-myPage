import React from 'react';

import AboutMe from './AboutMe';

const Profile = () => {
  return (
    <div className='profile'>
      <h1>Profile</h1>
      {<AboutMe />}
      <button className='button cv'>Check my Résumé</button>
    </div>
  );
}

export default Profile;