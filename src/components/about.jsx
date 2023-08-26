import React from 'react';
import Tech from './Tech';
import '../stylesheets/about.css';


const About = () => {
    return(
        <div className='infoContainer'>
            <div className='intro'>
                <h1>Overview</h1>
                <p>I'm a skilled self-taught developer with experience in HTML, CSS, JavaScipt, C, Python and expertise in frameworks like React, bootstrap and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!</p>
            </div>
            <div className='techContainer'>
                <h1 className='techTitle'>Technologies:</h1>
                
            </div>
        </div>
    )
}

export default About;