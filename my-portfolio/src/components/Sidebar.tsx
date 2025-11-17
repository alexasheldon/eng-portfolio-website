import React from 'react';
import profilePic from '../assets/profile_photo1.jpg';
import '../styles/sidebar.css';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {isOpen && <div className="overlay" onClick={onClose}></div>}
      {/* Sidebar */}
      <nav
        className={`w3-sidebar w3-collapse w3-white w3-animate-left`}
        style={{ zIndex: 3, width: '300px' }}
      >
        <div className="w3-container">
          <a href="#" onClick={onClose} className="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey"
            title="close menu">
            <i className="fa fa-remove"></i>
          </a>
          <img src={profilePic} style={{ width: '100%', marginTop: '15px' }} className="w3-round" alt="Profile" /><br /><br />
          <a href="#"><h4><b>Alexa Sheldon</b></h4></a>
          <p className="w3-text-grey">Learning, Listening, Developing</p>
          <a href="https://github.com/alexasheldon" target="_blank"><i className="fa fa-github fa-2x w3-hover-opacity"></i></a>
          <a href="https://www.linkedin.com/in/alexa-sheldon33/" target="_blank"><i
            className="fa fa-linkedin fa-2x w3-hover-opacity" style={{ marginLeft: '6px' }}></i></a>
        </div>
        <div className="w3-bar-block">
          <a href="#about" className="w3-bar-item w3-button w3-padding"><i
            className="fa fa-user fa-fw w3-margin-right"></i>About Me</a>
          <a href="#projects" className="w3-bar-item w3-button w3-padding"><i
            className="fa fa-th-large fa-fw w3-margin-right"></i>Projects</a>
          <a href="#experience" className="w3-bar-item w3-button w3-padding"><i
            className="fa fa-th-large fa-fw w3-margin-right"></i>Experience</a>
        </div>
      </nav>
      {/* Overlay (only shows on small screens) */}
      {/* <div
        className="w3-overlay w3-hide-large w3-animate-opacity"
        onClick={onClose}
        style={{ cursor: 'pointer' }}
        title="close side menu"
        id="myOverlay"
      ></div> */}
    </>
  );
};
export default Sidebar;