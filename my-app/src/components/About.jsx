import React from 'react';
import PictureOfMe from './IMG_2162.JPG'

const About = () => {
  return (
    <section>

      <h2>About Me</h2>
      <div className='about-me-wrapper'>
      <img className='about-me-img'src={PictureOfMe} alt='me'/>
      <p className='about-me-text'>Hi, my name is Delia. As a junior software engineer and philosophy graduate, I found the perfect intersection of my interests in technology and the world of ideas. With a passion for software development, I focus on building websites and apps that support people's well-being, promote environmental sustainability, and encourage the ethical use of artificial intelligence.<br/><br/>
      I spent more than 5 years studying philosophy at Sheffield, Cambridge, and the LSE, I specialized in philosophy of cognitive science and AI ethics. I became particularly interested in Kantian ethics, dual-process theories, mental imagery, and reductionism. This background allowed me to better understand the connections between philosophical concepts and their practical applications in technology. <br/><br/>
      Also, unsprisingly, I have a cat. 
      </p>
      </div>
    </section>
  );
};

export default About;