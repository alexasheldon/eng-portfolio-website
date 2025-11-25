import React, { useState } from 'react';
import imgSIP from '../assets/SIP.jpg';
import imgPorridge from '../assets/IMG_6759.jpg';
import pandasReportPdf from '../assets/CS4775_Final_Report_2024.pdf';
import dashboardImg from '../assets/single-case-litigation.png'
import aslImg from '../assets/o-asl.png';
import redPandaFallback from "../assets/red_panda_fallback.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs, Mousewheel } from "swiper/modules";
import "swiper/swiper-bundle.css";
import '../styles/projects.css';

interface ProjectsProps { }

interface Project {
  title: string;
  description: string;
  mainImage?: string;
  additionalImage?: string;
  embeds?: string[];
  tags?: string[];
  gitLink?: string;
}

const projects: Project[] = [
  {
    title: "Porridge - Cigna",
    mainImage: imgSIP,
    description: "Created a full end-to-end web app which analyzed code diffs from enterprise GitHub to gather insights on " +
      "Pull Requests including how much to test and what the major changes were. (Won the Summer Innovations " +
      "Project competition)",
    additionalImage: imgPorridge,
    tags: ["Node.js w/ bun", "Typescript", "RESTful APIs", "Git/GitHub", "Artifical Intelligence", "AWS", "PostreSQL"]
  },
  {
    title: "Red Panda Phylogeny Analysis",
    description: "Applying algorithms to Red Panda DNA to determine a potential split in its speciation.",
    embeds: ["https://docs.google.com/presentation/d/e/2PACX-1vTuIOKVnPhrLvKjZPqffxpJSvHfo2Sj_8T4HXUbohAXMGJH-vFb6WViFar-onamWQ02_-px7rxNvBQZ/pubembed?start=false&loop=false&delayms=3000", pandasReportPdf],
    tags: ["Python", "Sequence Alignment", "Phylogenetic Trees", "Algorithms", "Beta-Hill Climbing"],
    gitLink: "https://github.com/alexasheldon/cs4775_final_project_phylogeny_red_pandas"
  },
  {
    title: "Single Case Litigation Budget",
    description: "Created a live PowerBI dashboard to assist with asset management & budget tracking. The live data which is confidential has been replaced with synthetic data.",
    mainImage: dashboardImg,
    tags: ["PowerBI", "Data Visualization", "DAX", "Data Analysis", "Asset Mangagement"]
  }
];

const Projects: React.FC<ProjectsProps> = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <section id="projects">
      <div className="w3-row-padding">
        <div className="w3-section w3-bottombar">
          <span className="w3-margin-right"></span>
        </div>
        <div>
          <b><h3>My Projects</h3></b>
        </div>
        <div className="projects-section">
          <Swiper
            modules={[Navigation, Pagination, Thumbs, Mousewheel]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            thumbs={{ swiper: thumbsSwiper }}
            mousewheel={{ forceToAxis: true }}
          >
            {projects.map((p, i) => (
              <SwiperSlide key={i}>
                <div className="project-card">
                  <h3>{p.title}</h3>
                  <p>
                    {p.mainImage && <img src={p.mainImage} alt={p.title} className="main-img" />}
                    {p.description}
                    {p.additionalImage && <img src={p.additionalImage} alt="inline" className="inline-img" />}
                  </p>
                  {/* Embedded content (paper/slideshow) */}
                  {p.embeds && p.embeds.length > 0 && (
                    <div className="embed-row">
                      {p.embeds.map((src, j) => (
                        <iframe
                          key={j}
                          src={src}
                          className="embed-item"
                          allowFullScreen
                          title={`${p.title}-embed-${j}`}
                        ></iframe>
                      ))}
                    </div>
                  )}
                  {/* GitHub link */}
                  {p.gitLink && (
                    <a href={p.gitLink} target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-github fa-2x w3-hover-opacity"></i>
                    </a>
                  )}
                  {/* Tags */}
                  <div className="tags">
                    {p.tags && p.tags.map((tag, j) => (
                      <span key={j} className="tag">{tag}</span>
                    ))}
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView="auto"
            watchSlidesProgress
            className="thumbs-swiper"
          >
            {projects.map((p, i) => (
              <SwiperSlide key={i}>
                <div className="thumb-card">
                  {p.mainImage ? (
                    <img src={p.mainImage} alt={p.title} title={p.title} className="thumb-media" />
                  ) : p.title == "Red Panda Phylogeny Analysis" ? (
                    <img src={redPandaFallback} alt={p.title} title={p.title} className="thumb-media" />
                  ) : (
                    <div className="thumb-placeholder">{p.title}</div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="w3-row-padding">
        <h3><b>Projects I'm Currently Working On:</b></h3>
      </div>
      <div className="w3-row-padding">
        <div className="w3-third w3-container w3-margin-bottom">
          <div className="w3-container w3-white">
            <h4><b>SignNet - ASL Alphabet Recognizer</b></h4>
            <p><img src={aslImg} alt="The letter O in Sign Language"
              style={{ float: "right", width: "30%", margin: "0 0 1em 1em" }} />
              Implementing and training a CNN for recognizing American Sign Language letters in real time.</p>
            <div className="tag w3-light-grey w3-small">Python</div>
            <div className="tag w3-light-grey w3-small">CNNs</div>
            <div className="tag w3-light-grey w3-small">Computer Vision</div>
            <div className="tag w3-light-grey w3-small">Data Cleaning</div>
          </div>
        </div>
        <div className="w3-third w3-container w3-margin-bottom">
          <div className="w3-container w3-white">
            <h4><b>Blackjack RL Agent</b></h4>
            <p>Implementing a reinforcement learning agent optimized for playing blackjack.</p>
            <div className="tag w3-light-grey w3-small">Python</div>
            <div className="tag w3-light-grey w3-small">Reinforcement Learning</div>
            <div className="tag w3-light-grey w3-small">DQN</div>
            <div className="tag w3-light-grey w3-small">AI Communication</div>
          </div>
        </div>
        <div className="w3-third w3-container">
          <div className="w3-container w3-white">
            <h4><b>Portfolio Website</b></h4>
            <p>This involves the creation and updating of this website!
              <a href="https://github.com/alexasheldon/eng-portfolio-website" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github fa-2x w3-hover-opacity" style={{ marginLeft: '6px' }}></i>
              </a>
            </p>
            <div className="tag w3-light-grey w3-small">React.js / Node.js</div>
            <div className="tag w3-light-grey w3-small">Typescript</div>
            <div className="tag w3-light-grey w3-small">HTML</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;