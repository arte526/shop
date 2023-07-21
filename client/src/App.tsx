import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HeadSite from './components/HeadSite/HeadSite';
import Router  from './Router/Router';


function App() {
  return (
    <BrowserRouter>
      <header>
        <HeadSite/>
      </header>
      <main>
        <Router/>
      </main>
      <footer>
      </footer>
    </BrowserRouter>
  );
}

export default App;
