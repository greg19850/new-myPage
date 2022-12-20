import React from 'react';

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

import mePhoto from '../img/me.png'
import AboutMe from './AboutMe';

const Profile = () => {
  return (
    <div id='profile' className='profile'>
      <div className='profile-head'>
        <h1>Profile</h1>
        <Image fluid src={mePhoto} alt="Greg" />
      </div>
      {<AboutMe />}
      <Button variant="primary" className='button cv'>Check my Résumé</Button>
    </div>
  );
}

export default Profile;