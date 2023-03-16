import React, { useState, useEffect,useRef } from 'react';
import { getGeneratedTitle } from '../gpt3';
import About from './About';
import HeroImage from './background.jpg';
import ProjectShowcase from './ProjectShowcase';


const HomePage = () => {
    const [title, setTitle] = useState('');
    const [triggered, setTriggered] = useState(false);
  
    /*useEffect(() => {
      const fetchTitle = async () => {
        const generatedTitle = await getGeneratedTitle();
        setTitle(generatedTitle);
      };
      fetchTitle();
    }, []);*/
  
    const handleWheel = (event) => {
      if (event.deltaY > 0) {
        setTriggered(true);
      } else {
        setTriggered(false);
      }
    };
  
    return (
      <div onWheel={handleWheel}>
        <section
          className={`homepage-hero${triggered ? ' fade-out' : ''}`}
          style={{ backgroundImage: `url(${HeroImage})` }}
        >
          <h1>{title || "Welcome to Delia's Portfolio"}</h1>
        </section>
        <section className={`about${triggered ? ' move-up' : ''}`}>
          <About/>
        </section>
        <section className={`project-showcase${triggered ? ' move-up' : ''}`}>
        <section className={`project-showcase-wrapper${triggered ? ' move-up' : ''}`}>
      <ProjectShowcase />
    </section>
        </section>
      </div>
    );
  };
  
  export default HomePage;