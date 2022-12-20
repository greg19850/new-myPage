import React from 'react';

import '../styles/App.scss';
import Menu from './Menu';
import Page from './Page';
import Footer from './Footer';

function App() {
  return (
    <div className='App container-fluid'>
      <header>
        {<Menu />}
      </header>
      <main>
        {<Page />}
      </main>
      <footer>
        {<Footer />}
      </footer>
    </div>
  );
}

export default App;
