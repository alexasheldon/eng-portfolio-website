import React from 'react';
import imgSIP from '../assets/SIP.jpg';
import imgPorridge from '../assets/IMG_6759.jpg';
import pandasReportPdf from '../assets/CS4775_Final_Report_2024.pdf';
import pandasReportImg from '../assets/red_pandas_paper_first_page.png';
import dashboardImg from '../assets/single-case-litigation.png'
import aslImg from '../assets/o-asl.png';

interface ProjectsProps { }

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <section id="projects">
      <div className="w3-row-padding">
        <div className="w3-section w3-bottombar">
          <span className="w3-margin-right"></span>
        </div>
        <div>
          <h4><b>My Projects</b></h4>
        </div>
        <div className="w3-third w3-container w3-margin-bottom">
          <div className="w3-container w3-white">
            <h4><b>Porridge - Cigna</b></h4>
            <img src={imgSIP} alt="SIP Team 6" style={{ width: "100%" }} />
            <p>
              <img src={imgPorridge} alt="SIP Team 6" style={{ float: "right", width: "50%", margin: "0 0 1em 1em" }} />
              Created a full end-to-end web app which analyzed code diffs from enterprise GitHub to gather insights on
              Pull Requests including how much to test and what the major changes were. (Won the Summer Innovations
              Project competition)
            </p>

          </div>
        </div>
        <div className="w3-third w3-container">
          <div className="w3-container w3-white">
            <a href="https://github.com/alexasheldon/cs4775_final_project_phylogeny_red_pandas" target="_blank">
              <h4><b>Red Panda Phylogeny Analysis</b></h4>
            </a>
            <p>Conducted a phylogenetic analysis of red pandas using mitochondrial DNA sequences (creating a possible
              evolutionary tree). We determined sequence alignment and
              implemented various phylogenetic tree algorithms, leveraging beta-hill climbing. Our paper
              provides
              evolutionary insights into the monotypic taxon of the Red Panda.</p>
          </div>
          <a href={pandasReportPdf} target="_blank">
            <img src={pandasReportImg} alt="First page of my paper on red pandas"
              style={{ width: "100%" }} className="w3-hover-opacity" />
          </a>
        </div>
        <div className="w3-third w3-container w3-margin-bottom">
          <div className="w3-container w3-white">
            <h4><b>Single Case Litigation Budget Tracking Dashboard - Fortress</b></h4>
            <a href={dashboardImg} target="_blank">
              <img src={dashboardImg} alt="A PowerBI Dashboard report for Budget Tracking"
                style={{ width: "100%" }} className="w3-hover-opacity" />
            </a>
            <p>Created a live PowerBI dashboard to assist with asset management & budget tracking. The live data which
              is
              confidential has been replaced with synthetic data.</p>
          </div>
        </div>
      </div>
      <div className="w3-row-padding">
        <h3><b>Currently:</b></h3>
      </div>
      <div className="w3-row-padding">
        <div className="w3-third w3-container w3-margin-bottom">
          <div className="w3-container w3-white">
            <h4><b>SignNet - ASL Alphabet Recognizer</b></h4>
            <p><img src={aslImg} alt="The letter O in Sign Language"
              style={{ float: "right", width: "30%", margin: "0 0 1em 1em" }} />
              Implementing and training a CNN for recognizing American Sign Language letters in real time.</p>
          </div>
        </div>
        <div className="w3-third w3-container w3-margin-bottom">
          <div className="w3-container w3-white">
            <h3><b>Blackjack RL Agent</b></h3>
            <p>Implementing a reinforcement learning agent optimized for playing blackjack.</p>
          </div>
        </div>
        <div className="w3-third w3-container">
          <div className="w3-container w3-white">
            <a href="https://github.com/alexasheldon/eng-portfolio-website" target='_blank'><h4><b>Portfolio Website</b></h4></a>
            <p>This involves the creation and updating of this website!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;