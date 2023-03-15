import React from 'react';
import About from './About';
import ProjectShowcase from './ProjectShowcase';

const HomePage = () => {
  return (
    <main>
      <section>
        <h1>Welcome to My Portfolio</h1>
        <img src='my-app/src/components/background.jpg' alt="Hero" />
      </section>
      <About />
      <ProjectShowcase />
    </main>
  );
};

export default HomePage;