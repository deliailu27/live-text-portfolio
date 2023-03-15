import React, { useState, useEffect } from 'react';

const ProjectShowcase = () => {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch your projects data here
    const fetchedProjects = [
      {
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: 'https://via.placeholder.com/300',
      },
      {
        title: 'Project 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imageUrl: 'https://via.placeholder.com/300',
      },
    ];
    setProjects(fetchedProjects);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [projects]);

  if (!projects.length) {
    return <p>Loading...</p>;
  }

  const { title, description, imageUrl } = projects[currentIndex];

  return (
    <section>
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
};

export default ProjectShowcase;