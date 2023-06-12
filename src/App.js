import BIRDS from 'vanta/src/vanta.birds';
import React, { useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const vanta = useRef(null);

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
        })
        
      }
    }

    initializeVanta();
  },[])

  useEffect(() => {
    const text = document.querySelector('.changeTxt');

    const textLoad = () => {
      setTimeout(() => {
        text.textContent = 'front end developer';
      }, 8000)
      setTimeout(() => {
        text.textContent = 'technophile';
      }, 4000)
      setTimeout(() => {
        text.textContent = 'life long learner';
      }, 8000)
    }

    textLoad();
    setInterval(textLoad, 12000);
  })
  return (
    <div className="App">
          <div id='main' ref={vanta} >
                <header className='typewriter'><h1>Hello, I'm a</h1><h1 className='changeTxt'>Front end developer</h1></header>
          </div>
          
    </div>
  );
}

export default App;
