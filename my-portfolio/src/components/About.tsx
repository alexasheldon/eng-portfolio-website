import React from 'react';
import parisImg from '../assets/paris.jpg';
import eileanDonanImg from '../assets/eilean_donan.jpg';
import kayakImg from '../assets/kayak.jpg';
import santaOlivaImg from '../assets/santa_oliva.jpg';

interface AboutProps { }

const About: React.FC<AboutProps> = () => {
  return (
    <section>
      <div className="w3-row-padding">
        <div className="w3-section w3-bottombar" id="about">
          <span className="w3-margin-right"></span>
        </div>
        <div>
          <h4><b>About Me</b></h4>
        </div>
        <div className="w3-col m4">
          <div className="image-container">
            <a href={eileanDonanImg} target="_blank">
              <img src={eileanDonanImg} alt="Me at Eilean Donan Castle in Scotland in 2025"
                title="Me at Eilean Donan Castle in Scotland in 2025" style={{ width: "100%" }} className="w3-hover-opacity" />
            </a>
            <div className="overlay-text">Eilean Donan Castle, Scotland, 2025</div>
          </div>
          <h1><b>Hello, World!</b></h1>
        </div>
        <div className="w3-col m4">
          <div className="image-container">
            <a href={kayakImg} target="_blank">
              <img src={kayakImg} alt="Me Kayaking near Monterrey, California in 2022"
                title="Me Kayaking near Monterrey, California in 2022" style={{ width: "100%" }} className="w3-hover-opacity" />
            </a>
            <div className="overlay-text">Kayaking near Monterrey, California, 2022</div>
          </div>
          <div className="image-container">
            <a href={santaOlivaImg} target="_blank">
              <img src={santaOlivaImg} alt="Me in Santa Olvia, Catalonia, Spain in 2023"
                title="Me in Santa Olvia, Catalonia, Spain in 2023" style={{ width: "100%" }} className="w3-hover-opacity" />
            </a>
            <div className="overlay-text">Santa Olvia, Catalonia, Spain, 2023</div>
          </div>
        </div>
        <div className="w3-col m4">
          <div className="image-container">
            <a href={parisImg} target="_blank">
              <img src={parisImg} alt="Me in Paris, France in 2025" title="Me in Paris, France in 2025"
                style={{ width: "100%" }} className="w3-hover-opacity" />
            </a>
            <div className="overlay-text">Paris, France, 2025</div>
          </div>
        </div>
      </div>

      <div className="w3-container " style={{ marginBottom: "32px" }}>
        <p>I'm currently in my final year (graduating May 2026) at Cornell University
          studying Computer Science with a passion for software development, machine learning and artificial
          intelligence.
          Beyond my projects and studies, I love to travel and explore new places (pictured above).
          It fuels my curiosity and inspires me to approach challenges with diverse perspectives.
          My goal is to contribute to impactful projects that bridge cutting-edge technology with
          real-world needs.
        </p>
        <p>
          <a href="/Alexa_sheldon_Resume_2026.docx" target="_blank" rel="noopener noreferrer">
            <button className="w3-button w3-dark-grey w3-padding-large w3-margin-top w3-margin-bottom">
              <i className="fa fa-download w3-margin-right"></i>Download Resume
            </button>
          </a>
        </p>
      </div>
    </section>
  );
};

export default About;