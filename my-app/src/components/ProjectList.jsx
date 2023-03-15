import React from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://via.placeholder.com/300',
  },
];

const ProjectList = () => {
  return (
    <section>
      <h2>Projects</h2>
      <ul>
        {projectsData.map((project) => (
          <li key={project.id}>
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectList;