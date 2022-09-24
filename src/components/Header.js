import React from "react";
import dp from "../images/dp.jpg";
import email from "../images/email.png";
import linkedin from "../images/Vector.png";

const Header = () => {
  return (
    <div className="header-section">
      <img src={dp} alt="profile picture" className="img" />
      <div className="about">
        <h1>Mangesh Kumar</h1>
        <h2>Frontend Developer</h2>
        <h3>
          <a href="https://github.com/mangeshkchauhan" target="_blank">
            github.com/mangeshkchauhan
          </a>
        </h3>
      </div>
      <div className="button">
        <button
          className="email"
          onClick={() => (window.location = "mailto:mangeshkrm123@gmail.com")}
        >
          <span>
            <img src={email} alt="email" />
          </span>
          Email
        </button>
        <button as="a" href="https://www.linkedin.com/in/mangeshkchauhan/" className="linkedin">
          <span className="linkedin-button-icon">
            <img src={linkedin} alt="linkedin" />
          </span>Linkedin</button>
      </div>
    </div>
  );
};

export default Header;
