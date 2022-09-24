import React from "react";
import twitter from '../images/Twitter.png'
import insta from '../images/Instagram.png'
import fb from '../images/Facebook.png'
import github from '../images/GitHub.png'


const Footer = () => {
  return (
    <div className="footer">
      <img src={twitter} alt="twitter" />
      <img src={fb} alt="facebook" />
      <img src={insta} alt="instagram" />
      <img src={github} alt="github" />
    </div>
  );
};

export default Footer;