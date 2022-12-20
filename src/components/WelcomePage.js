import React from 'react';

import Image from 'react-bootstrap/Image'

import myPhoto from '../img/computer.jpg'

const WelcomePage = () => {

  return (
    <div className='welcome-page'>
      <div className='welcome-text'>
        Hi, I'm Greg
        Welcome to my personal page
      </div>
      <Image fluid rounded src={myPhoto} alt="Welcome photo" />
    </div>
  );
}

export default WelcomePage;