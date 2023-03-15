import React from 'react';

const ContactPage = () => {
  const externalUrls = [
    { id: 1, title: 'LinkedIn', url: 'https://www.linkedin.com/in/yourusername' },
    { id: 2, title: 'GitHub', url: 'https://github.com/yourusername' },
  ];

  return (
    <main>
      <h1>Contact</h1>
      <section>
        <h2>Get in touch</h2>
        <ul>
          {externalUrls.map(({ id, title, url }) => (
            <li key={id}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default ContactPage;