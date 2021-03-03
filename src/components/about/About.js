import React from "react";

import "./about.scss";

import Navbar from "../navbar/Navbar.js";
import Footer from "../footer/Footer.js";

const About = () => {
  return (
    <section className="about-section">
      <Navbar />
      <div className="about-me">
        <img className="about-img" src={require("./sassy.jpg")}></img>
        <span className="about-span">
          <p className="about-me-title">Kevin Brennan</p>
          <p className="subtitle">
            A developer living in the greater Philadelphia PA area
            (willing to relocate)
          </p>
          <p className="about-p">
            I currently am working as a wordpress developer and designer at a local family-owned wordpress shop and I have a passion for full-stack development.
            I love building out new features and ensuring that my code is responsive and DRY, and I'm always researching what others are doing so that I can look to implement
            new patterns and tech that make the user's experience faster and more enriching.<br></br><br></br>
            In my free time I'm usually coding, reading, practicing archery, lockpicking, playing disc golf, or going on long walks. 
          </p>
          <a
            className="resume-a"
            target="_blank"
            href={require("./Brennan2021.pdf")}
          >
            <button className="resume-btn">View Resume</button>
          </a>
        </span>
      </div>
      <div className="skills-and-interests">
        <div className="skills">
          <p>Skills</p>
          <div className="backend">
            <p className="skills-p">Backend</p>
            <ul className="ul backend-ul">
              <li>
                <img
                  className="language-img"
                  src={require(".././projects/project_assets/rrails.jpg")}
                ></img>
              </li>
              <li>
                <img
                  className="language-img"
                  src={require(".././projects/project_assets/node.jpg")}
                ></img>
              </li>
              <li>
                <img
                  className="language-img"
                  src={require(".././projects/project_assets/firebase.png")}
                ></img>
              </li>
              <li>
                <img
                  className="language-img"
                  src={require(".././projects/project_assets/sql.png")}
                ></img>
              </li>
              <li>
                <img
                  className="language-img"
                  src={require(".././projects/project_assets/api.png")}
                ></img>
              </li>
              <li>
                <img
                  className="language-img"
                  src={require(".././projects/project_assets/git.png")}
                ></img>
              </li>
              <li>
                <img
                  className="language-img"
                  src={require(".././projects/project_assets/python.png")}
                ></img>
              </li>
            </ul>
          </div>
          <div className="frontend">
            <p className="skills-p">Frontend</p>
            <ul className="ul frontend-ul">
              <li>
                <img
                  className="language-img"
                  src={require(".././projects/project_assets/react.png")}
                ></img>
              </li>
              <li>
                <img
                  className="language-img"
                  src={require(".././projects/project_assets/js.png")}
                ></img>
              </li>
              <li>
                <img
                  className="language-img"
                  src={require(".././projects/project_assets/wp.png")}
                ></img>
              </li>
              <li>
                <img
                  className="language-img"
                  src={require(".././projects/project_assets/ruby.png")}
                ></img>
              </li>
              <li>
                <img
                  className="language-img"
                  src={require(".././projects/project_assets/html5.png")}
                ></img>
              </li>
              <li>
                <img
                  className="language-img"
                  src={require(".././projects/project_assets/css3.png")}
                ></img>
              </li>
            </ul>
          </div>
        </div>
        <div className="interests">
          <p className="interests-p">Interests</p>
          <ul className="interests-ul">
            <li>Coding...</li>
            <li>Fitness</li>
            <li>Guitar</li>
            <li>Video Games</li>
            <li>Mountain Biking</li>
            <li>Volunteering</li>
            <li>Disc Golf</li>
            <li>Meditation</li>
            <li>Cooking</li>
            <li>Target Archery</li>
            <li>Science Fiction Books</li>
            <li>Fixing broken appliances</li>
            <li>Movies</li>
            <li>Self-reflection</li>
            <li>People-watching</li>
          </ul>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
