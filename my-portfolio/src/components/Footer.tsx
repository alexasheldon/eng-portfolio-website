import React from 'react';
import '../styles/footer.css';

export interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="w3-container w3-padding-32 w3-dark-grey">
      <div className="w3-row-padding">
        <div className="w3-third">
          <h3>Contact Me</h3>
          <p><i className="fa fa-envelope"></i> alexarsheldon@gmail.com</p>
          <p><i className="fa fa-phone"></i> 508-308-5340</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;