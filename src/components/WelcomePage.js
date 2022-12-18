import React from 'react';

import myPhoto from '../img/me.jpg'

const WelcomePage = () => {

  return (
    <div className='welcome'>
      <div className='welcome-text'>
        Welcome to my personal page
      </div>
      <div className="img-container">
        <img src={myPhoto} alt="Greg" />
      </div>
    </div>
  );
}

export default WelcomePage;