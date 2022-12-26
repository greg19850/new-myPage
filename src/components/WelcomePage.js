import React from 'react';

import '../styles/WelcomePage.scss'

import Image from 'react-bootstrap/Image'

import myPhoto from '../img/laptop.jpg'

const WelcomePage = () => {
  const welcomeMessage = <p>Hi, I'm Greg. <br /> Welcome to my personal page</p>

  return (
    <div className='welcome-page'>
      <div className='welcome-text'>
        {welcomeMessage}
      </div>
      <Image fluid rounded src={myPhoto} alt="Welcome photo" />
    </div>
  );
}

export default WelcomePage;