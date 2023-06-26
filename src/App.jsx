import BIRDS from 'vanta/src/vanta.birds';
import mp from '../src/assets/mp-logo.png';
import Projects from './components/projects';
import Contact from './components/contact';
import ScrollToTop from 'react-scroll-to-top';
import { TypeAnimation } from 'react-type-animation';
import React, { useEffect, useRef, useState } from 'react';
import About from './components/about';
import './App.css';



const App = () => {
  const [navbar, setNavbar] = useState(false);
  const [show, setShow] = useState(true);
  const brgrNav = <ul className='brgrNav'>
                    <li onClick={() => scrollToSection(about)}>About</li>
                    <li onClick={() => scrollToSection(projects)}>Projects</li>
                    <li onClick={() => scrollToSection(contacts)}>Contact</li>
                  </ul>
  const vanta = useRef(null);
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

  const changeBackground = () => {
    if (window.scrollY >= 46) {
        setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);
  })

  useEffect(() => {
    let effectInstance;

    const initializeVanta = async () => {
      if(!effectInstance && vanta.current) {
        effectInstance = await BIRDS({
          el: vanta.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          birdSize: 1.20,
          color1: 0x3cff
        })
        
      }
    }

    initializeVanta();
  },[])


  return (
    <div className="App">
          <div id='main' ref={vanta} >
                <nav className={navbar ? 'nav-scroll' : 'nav'}>
                  <h1 className='logowrap'><img  className='logo' src={mp} alt='MP'></img></h1>
                  <ul className='navList'>
                    <li onClick={() => scrollToSection(about)}>About</li>
                    <li onClick={() => scrollToSection(projects)}>Projects</li>
                    <li onClick={() => scrollToSection(contacts)}>Contact</li>
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
                  <ScrollToTop smooth />
                  <div className='aboutContainer' ref={about}>
                    <About />
                  </div>
                  <div className='projectContainer' ref={projects}>
                    <Projects />
                  </div>
                  <Contact />
                  <div className='contactContainer' ref={contacts}>
                  
                  </div>
          </div>
    </div>
  );
}

export default App;
