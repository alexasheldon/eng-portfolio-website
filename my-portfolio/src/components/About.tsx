import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import "swiper/swiper-bundle.css";
import parisImg from '../assets/paris.jpg';
import eileanDonanImg from '../assets/eilean_donan.jpg';
import kayakImg from '../assets/kayak.jpg';
import santaOlivaImg from '../assets/santa_oliva.jpg';
import '../styles/about.css';

interface AboutProps { }

const About: React.FC<AboutProps> = () => {
  return (
    <section>
      <div className="w3-row-padding">
        <div className="w3-section w3-bottombar" id="about">
          <span className="w3-margin-right"></span>
        </div>
        <div>
          <h3><b>About Me</b></h3>
        </div>
        <Swiper
          modules={[Navigation, Mousewheel]}
          slidesPerView={1}
          navigation
          loop
          mousewheel={{ forceToAxis: true }}
          style={{ height: "70vh" }}
        >
          <SwiperSlide>
            <div className="image-container">
              <img
                src={eileanDonanImg}
                alt="Me at Eilean Donan Castle in Scotland in 2025"
                title="Me at Eilean Donan Castle in Scotland in 2025"
                className="gallery-image"
              />
              <div className="overlay-text">
                Eilean Donan Castle, Scotland, 2025
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
              <img src={kayakImg} alt="Me Kayaking near Monterrey, California in 2022"
                title="Me Kayaking near Monterrey, California in 2022" className="gallery-image" />
              <div className="overlay-text">Kayaking near Monterrey, California, 2022</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
              <img src={santaOlivaImg} alt="Me in Santa Olvia, Catalonia, Spain in 2023"
                title="Me in Santa Olvia, Catalonia, Spain in 2023" className="gallery-image" />
              <div className="overlay-text">Santa Olvia, Catalonia, Spain, 2023</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
              <img src={parisImg} alt="Me in Paris, France in 2025" title="Me in Paris, France in 2025"
                className="gallery-image" />
              <div className="overlay-text">Paris, France, 2025</div>
            </div>
          </SwiperSlide>
        </Swiper>
        <h1><b>Hello, World!</b></h1>
      </div>
      <div className="w3-container " style={{ marginBottom: "0px" }}>
        <p>I'm currently in my final year (graduating May 2026) at Cornell University
          studying Computer Science with a passion for software development, machine learning and artificial
          intelligence.
          Beyond my projects and studies, I love to travel and explore new places (pictured above).
          It fuels my curiosity and inspires me to approach challenges with diverse perspectives.
          My goal is to contribute to impactful projects that bridge cutting-edge technology with
          real-world needs.
        </p>
      </div>
    </section >
  );
};

export default About;