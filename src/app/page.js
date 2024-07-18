'use client'

import './page.css';
import { createContext, useState } from 'react';
import Nav from '@/components/Nav';
import Pages from '@/pages/Pages'

export default function App() {
  const [pageName, setPageName] = useState('home')

  const changePage = (newPage) => {
    setPageName(newPage);
    console.log('New Page:', newPage);
  }

  return (
    <div id='page-container'>
      <div id='nav'>
        <Nav
          style={{backgroundColor: '#8885'}}
          pageName={pageName}
          changePage={changePage}
        />
      </div>
      <div id='pages'>
        <Pages pageName={pageName} />
      </div>
    </div>
  );
}
