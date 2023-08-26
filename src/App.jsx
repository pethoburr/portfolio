import mp from '../src/assets/mp-logo.png';
import Projects from './components/projects';
import Contact from './components/contact';
import ScrollToTop from 'react-scroll-to-top';
import { TypeAnimation } from 'react-type-animation';
import React, { useEffect, useRef, useState } from 'react';
import About from './components/about';
import './App.css';
import StarsCanvas from './components/canvas/stars';


const App = () => {
  const [navbar, setNavbar] = useState(false);
  const [show, setShow] = useState(true);
  const brgrNav = <ul className='brgrNav'>
                    <li onClick={() => scrollToSection(about)}>About</li>
                    <li onClick={() => scrollToSection(projects)}>Projects</li>
                    <li onClick={() => scrollToSection(contacts)}>Contact</li>
                  </ul>
  const about = useRef(null);
  const projects = useRef(null);
  const contacts = useRef(null);

  const showMenu = () => {
    if(show) {
      setShow(false);
    } else {
      setShow(true);
    }
  }

  const brgr = <span className="material-symbols-outlined" onClick={showMenu}>menu</span>
  const x = <div className='x' onClick={showMenu}>X</div>;

  const scrollToSection = (elementRef) => {
    showMenu();
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    })
  }

  const changeHeaderBackground = () => {
    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const percentage = (scrollTop / scrollHeight) * 100;
    if (percentage >= 1 && percentage <= 91) {
        setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  useEffect(() => {
    changeHeaderBackground();
    window.addEventListener('scroll', changeHeaderBackground);
  })

  return (
    <div className="App">
      <ScrollToTop smooth  component={<span id="arrow" class="material-symbols-outlined">
            keyboard_double_arrow_up
            </span>} />
      <div id='main'>
          <div id='main' >
          <nav className={navbar ? 'nav-scroll' : 'nav'}>
            <h1 className='logowrap'><img  className='logo' src={mp} alt='MP'></img></h1>
            <ul className='navList'>
              <li className='link' onClick={() => scrollToSection(about)}>About</li>
              <li className='link' onClick={() => scrollToSection(projects)}>Projects</li>
              <li className='link' onClick={() => scrollToSection(contacts)}>Contact</li>
            </ul>
            {show && brgr} {!show && x}
            {!show && brgrNav}
          </nav>
          
          <header className='typewriter'><h1>Hello! My name is Maninder Pahal.</h1><h1 className='changeTxt'>I am a <span className='changer'>
            <TypeAnimation
               sequence={[
                'front end developer.',
                1000,
                'technophile.',
                1000,
                'life long learner.',
                1000
               ]}
               wrapper="span"
               speed={50}
               repeat={Infinity}
               />
            </span></h1></header>
            
            <div className='aboutContainer' ref={about}>
              <About />
            </div>
            <div className='projectContainer' ref={projects}>
              <Projects />
            </div>
            
            <div className='relative z-0' ref={contacts}>
              <Contact />
              <StarsCanvas />
            </div>
    </div>
        </div>
    </div>
  );
}

export default App;
