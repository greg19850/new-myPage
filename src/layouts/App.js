import React from 'react';
import '../styles/App.css';
import Menu from './Menu';
import Page from './Page';
import Footer from './Footer';

function App() {
  return (
    <div className='App'>
      <header>
        {<Menu />}
      </header>
      <main>
        <section className="page">
          {<Page />}
        </section>
      </main>
      <footer>
        {<Footer />}
      </footer>
    </div>
  );
}

export default App;
