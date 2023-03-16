
import React from 'react';
import Project1Image1 from './project1-1.png';
import Project1Image2 from './project1-2.png';
import Project2Image1 from './project2-1.png';
import Project2Image2 from './project2-2.png';

const ProjectShowcase = ({ triggered }) => {
  return (
    
    <div className="project-showcase">
        <h2 className='project-showcase-title'>Featured Programming Projects</h2>
       <div className={`project-showcase-container${triggered ? ' move-up' : ''}`}>
        
        <a href="#project1" className="project-image-wrapper">
          <img src={Project1Image1} alt="Project 1" />
        </a>
        <a href="#project2" className="project-image-wrapper">
          <img src={Project1Image2} alt="Project 2" />
        </a>
        
        <a href="#project2" className="project-image-wrapper">
          <img src={Project2Image1} alt="Project 2" />
        </a>
        <a href="#project2" className="project-image-wrapper">
          <img src={Project2Image2} alt="Project 2" />
        </a>
      </div>
    </div>
  );
};

export default ProjectShowcase;
