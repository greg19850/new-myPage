import React from 'react';
import Navigation from '../components/Navigation';

import '../styles/Menu.scss'

const Menu = () => {
  return (
    <div className='menu'>
      {<Navigation />}
    </div>
  );
}

export default Menu;