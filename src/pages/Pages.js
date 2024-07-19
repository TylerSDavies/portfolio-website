'use client'
import { useState, useEffect } from 'react';

import Home from '@/pages/Home';
import About from '@/pages/About';
import Skills from '@/pages/Skills';
import Projects from '@/pages/Projects';
import Contact from '@/pages/Contact';

export default function Pages(props) {
    const [currentPage, setCurrentPage] = useState('home');
    const [previousPage, setPreviousPage] = useState('');

    useEffect(() => {
        setCurrentPage(props.pageName);
    }, [props.pageName]);

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