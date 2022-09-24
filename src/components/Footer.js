import React from "react";
import twitter from '../images/Twitter.png'
import insta from '../images/Instagram.png'
import fb from '../images/Facebook.png'
import github from '../images/GitHub.png'


const Footer = () => {
  return (
    <div className="footer">
      <a href="https://twitter.com" target="_blank"><img src={twitter} alt="twitter" /></a>
      <a href="https://facebook.com" target="_blank"><img src={fb} alt="facebook" /></a>
      <a href="https://instagram.com" target="_blank"><img src={insta} alt="instagram" /></a>
      <a href="https://github.com" target="_blank"><img src={github} alt="github" /></a>
    </div>
  );
};

export default Footer;