import React from 'react';

const Landing: React.FC = () => {
  return (
    <section
      id="landing"
      style={{
        height: '100vh', // full viewport height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#222',
        color: '#fff',
      }}
    >
      <h1>Welcome to My Portfolio</h1>
    </section>
  );
};

export default Landing;
