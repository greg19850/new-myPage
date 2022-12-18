import React from 'react';
import Navigation from '../components/Navigation';
import Socials from '../components/Socials';

const Menu = () => {
  return (
    <div className='menu'>
      {<Socials />}
      {<Navigation />}
    </div>
  );
}

export default Menu;