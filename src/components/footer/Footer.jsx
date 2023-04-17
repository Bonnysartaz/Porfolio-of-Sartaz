import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa'
import './footer.css';

let date = new Date();

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Sk Sartaz Ahmed</a>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/sartaz-ahmed-70472877" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://www.facebook.com/sartaz.bonny.5" target="_blank" rel="noreferrer" ><FaFacebook /></a>
      <a href="https://www.instagram.com/sartazbonny" target="_blank" rel="noreferrer" ><FaInstagram /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ET {date.getFullYear()}. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer