import React from 'react';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LisnkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';
import './Footer.css';
const Footer = () => {
  return (
    <div className="Footer-container">
        <hr />
        <div className="footer">
        <div className="social-links">

            <img src={Github} alt="img" />
            <img src={Instagram} alt="img" />
            <img src={LisnkedIn} alt="img" />
        </div>
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
    </div>
    <div className="blur blur-footer-1"></div>
    <div className="blur blur-footer-2"></div>
    </div>
  )
}

export default Footer;
