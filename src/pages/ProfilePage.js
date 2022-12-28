import React from 'react';

import '../styles/Profile.scss'

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import mePhoto from '../img/me.png';
import AboutMe from '../components/AboutMe';

const ProfilePage = () => {
  return (
    <div id='profile' className='profile'>
      <div className='profile-head'>
        <h1>Profile</h1>
        <Image className='w-25' src={mePhoto} alt="Greg" />
      </div>
      {<AboutMe />}
      <Button variant="warning" className='button cv rounded-0' size='lg'>Check my Résumé</Button>
    </div>
  );
}

export default ProfilePage;