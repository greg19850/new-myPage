import React from 'react';

import AboutMe from '../components/AboutMe';

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

import mePhoto from '../img/me.png';
import Pdf from '../img/Greg_Mrowczynski_Resume.pdf';

import '../styles/Profile.scss';

const ProfilePage = () => {
  return (
    <Container id='profile' className='profile py-5'>
      <div className='profile-head py-3'>
        <div className="dark-overlay">
          <h1>Profile</h1>
          <Image src={mePhoto} alt="Greg" />
        </div>
      </div>

      {<AboutMe />}
      <Button href={Pdf} target="_blank" variant="warning" className='button cv rounded-0' size='lg'>Check my Résumé</Button>
    </Container>
  );
}

export default ProfilePage;