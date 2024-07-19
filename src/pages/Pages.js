'use client'
import { useEffect, useState } from 'react';

import Home from '@/pages/Home';
import About from '@/pages/About';
import Skills from '@/pages/Skills';
import Projects from '@/pages/Projects';
import Contact from '@/pages/Contact';

export default function Pages(props) {
    useEffect(() => {
            console.log('page changed')
        }
    ,[props.pageName]);

    switch(props.pageName) {
        case 'home':
            return <Home pageName={props.pageName} />
        case 'about':
            return <About />
        case 'skills':
            return <Skills />
        case 'projects':
            return <Projects />
        case 'contact':
            return <Contact />
        default:
            return <>404</>
    }
}