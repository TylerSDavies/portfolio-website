'use client'

import { createContext, useState } from 'react';
import Nav from '@/components/Nav';
import Pages from '@/pages/Pages'

export default function App() {
  const [pageName, setPageName] = useState('home')

  const changePage = (newPage) => {
    setPageName(newPage);
  }

  return (
    <div className='flex flex-col md:flex-row md:justify-center md:items-center w-screen h-screen'>
      <div id='nav' className='flex md:min-w-72 lg:min-w-96 md:justify-center transition-all'>
        <Nav
          style={{backgroundColor: '#8885'}}
          pageName={pageName}
          changePage={changePage}
        />
      </div>
        <div className='flex overflow-auto md:max-w-screen-md lg:mx-w-screen-md xl:max-w-screen-lg max-h-full justify-center w-full min-h-full md:min-h-0 mr-0 md:mr-2'>
          <Pages pageName={pageName} />
      </div>
    </div>
  );
}
