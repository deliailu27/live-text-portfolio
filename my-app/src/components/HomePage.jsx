import React, { useState, useEffect,useRef } from 'react';
import { getGeneratedTitle } from '../gpt3';
import About from './About';
import HeroImage from './background2.avif';
import Footer from './Footer';
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
            <div className='hero-h1-wrapper'>
         
          <h1 className='hero-h1'>{title || "Moral Codes"}</h1>
          </div>
          <div className='homepage-h2-wrapper'>
          <h3 className='hero-h3'>  Uniting Ethics and Software Engineering</h3>
          </div>
        </section>
        <section className={`about${triggered ? ' move-up' : ''}`}>
          <About/>
        </section>
        <section className="project-showcase-wrapper">
      <ProjectShowcase triggered={triggered} />
      
        </section>
        
      </div>
    );
  };
  
  export default HomePage;