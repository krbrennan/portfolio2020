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
          <p className="about-me-title">About Me</p>
          <p className="subtitle">
            I'm a fullstack developer from the greater Philadelphia PA area
            (willing to relocate)
          </p>
          <p className="about-p">
            I have a passion for building, teaching and learning. I'm
            experienced in Javascript, Ruby (and Rails), React, git, and have
            build applications with SQL, node.js, python3, Angular, and C++.
          </p>
          <p className="about-p">
            Versatile fullstack developer with a passion for building, teaching,
            and learning. Experience in React, Javascript, Ruby on Rails,
            restful API, SQL, modular code, Git, python and a BA in political
            science, psychology and education. I discovered software development
            through a close friend in 2016 and since then I have continuously
            built websites, created javascript games and tools, consulted and
            helped market local businesses, completed a rigorous fullstack
            software engineer program, and helped local coding meetups with a
            purpose to some day contribute to and grow with an engineering team.
            I enthusiastically bring strong skills in team-building,
            communication, debugging, analysis and leadership that helps
            companies succeed. My personability, critical thinking and research
            skills, background in education, and ​indefatigable passion for
            software development makes for an invaluable addition to your team.
            I can hit the ground running and I won’t stop.
          </p>
          <a
            className="resume-a"
            target="_blank"
            href={require("./brennan2020.pdf")}
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
                  src={require(".././projects/project_assets/ruby.png")}
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
                  src={require(".././projects/project_assets/javascript.png")}
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
                  src={require(".././projects/project_assets/css.png")}
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
