import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import reacticon from '../assets/reactjs.png';
import bike from '../assets/bike.mp4';
import gang from '../assets/gang.mp4';
import waldo from '../assets/waldo.mp4';
import resume from '../assets/resume.mp4';
import msgboard from '../assets/msgboard.mp4';
import { useState, useRef } from 'react';

const experiences = [
  {
    title: "Mini message board",
    icon: reacticon,
    iconBg: "#E6DEDD",
    live: "https://weathered-dream-325.fly.dev/",
    code: "https://github.com/pethoburr/mini-message-board",
    points: [
      "Developed a mini message board app created using NodeJS, ExpressJS, MongoDB, Mongoose, PUG",
      "Deployed and hosted with fly.io"
    ],
    vid: msgboard
  },
    {
      title: "Shopping Cart",
      iconBg: "#383E56",
      live: "https://pethoburr.github.io/shopping-cart/",
      code: "https://github.com/pethoburr/shopping-cart",
      points: [
        "Developed a mock shopping website using React, React Router, functional components and hooks",
        "Included mobile responsivness, WCAG guidelines, semantic HTML"
      ],
      vid: bike
    },
    {
      title: "Where's the weridos?",
      iconBg: "#E6DEDD",
      live: "https://pethoburr.github.io/photo-tagging/",
      code: "https://github.com/pethoburr/photo-tagging/",
      points: [
        "Developed a Where's Waldo style game involving 3 characters to find with a timer to track your score",
        "Included option to sign in with google account and use google username for updating score to leaderboard or manually entering custom name",
        "Implemented global leaderboards using Firebase backend",
      ],
      vid: waldo
    },
    {
      title: "Resume Builder",
      icon: reacticon,
      live: "https://pethoburr.github.io/cv-project/",
      code: "https://github.com/pethoburr/cv-project/",
      iconBg: "#383E56",
      points: [
        "Developed a Resume builder app in which you can enter your details into a form and on submit it will render a Resume preview",
        "Built with full mobile responsivness using React and implemented form best practices"
      ],
      vid: resume
    },
    {
      title: "Memory Game",
      icon: reacticon,
      iconBg: "#E6DEDD",
      live: "https://pethoburr.github.io/memory-game/",
      code: "https://github.com/pethoburr/memory-game/",
      points: [
        "Developed a memory game in which player attempts to select each individual card without selecting it twice. Max score is 12. Player high score is updated upon each beat"
      ],
      vid: gang
    },
  ];
  
  const ExperienceCard = ({ experience }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: "#1d1836",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={experience.title}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div className='flex justify-center items-center w-full h-full'>
            
          </div>
        }
      >
        <div>
          <h3 className='text-white text-[24px] font-bold'><a href={experience.live} target="_blank" rel="noreferrer">Live</a><span>&nbsp;|&nbsp;</span><a href={experience.code} target="_blank" rel="noreferrer">Code</a></h3>
          
        </div>
  
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
            <li>
              <video src={experience.vid} controls muted></video>
              </li>
        </ul>
      </VerticalTimelineElement>
    );
  };
  
  const Projects = () => {
    return (
      <div className='pjContain'>
        <motion.div variants={textVariant()}>
          <h2 className='pjhead'>
            Projects
          </h2>
        </motion.div>
  
        <div className='mt-20 flex flex-col'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    );
  };

export default Projects;