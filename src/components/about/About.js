import React from 'react';

import './about.scss';

import Navbar from '../navbar/Navbar.js'

const About = () => {
    return(
       <section className='about-section'>
           <Navbar />
           <div className='about-me'>
               <img className='about-img' src={require('./sassy.jpg')}></img>
               <span className='about-span'>
                   <p className='about-me-title'>About Me</p>
                   <p className='subtitle'>I'm a fullstack developer from the greater Philadelphia PA area (willing to relocate)</p>
                   <p className='about-p'>
                       I have a passion for building, teaching and learning. I'm experienced in Javascript, Ruby (and Rails), React, git, and have build applications with SQL, node.js, python3, Angular, and C++.
                   </p>
                   <p className='about-p'>
                    I hold a BA in philosophy, psychology and education. I discovered software development through working with developers at Urban Outfitters Headquarters in Philadelphia, PA and since then I have continuously built applications, completed a rigorous fullstack software engineer program, and attended university with an aim to contribute to and grow with an engineering team. I enthusiastically bring strong skills in team-building, communication, debugging, analysis and leadership that help progressive companies succeed. My personability, background in education, and indefatigable passion for software development has allowed me to accomplish and contribute more in my free time than most any computer science graduates I graduated with in their in four years. I can hit the ground running and I won’t stop.
                   </p>
                   <button className='resume-btn'>View Resume</button>
               </span>
           </div>
           <div className='skills-and-interests'>
                <div className='skills'>
                    <p>Skills</p>
                    <div className='backend'>
                        <p className='skills-p'>Backend</p>
                        <ul className='ul backend-ul'>
                            <li><img src={require('.././projects/project_assets/ruby.png')}></img></li>
                            <li><img src={require('.././projects/project_assets/sql.png')}></img></li>
                            <li><img src={require('.././projects/project_assets/api.png')}></img></li>
                            <li><img src={require('.././projects/project_assets/git.png')}></img></li>
                            <li><img src={require('.././projects/project_assets/python.png')}></img></li>
                        </ul>
                    </div>
                    <div className='frontend'>
                        <p className='skills-p'>Frontend</p>
                        <ul className='ul frontend-ul'>
                            <li><img src={require('.././projects/project_assets/react.png')}></img></li>
                            <li><img src={require('.././projects/project_assets/javascript.png')}></img></li>
                            <li><img src={require('.././projects/project_assets/ruby.png')}></img></li>
                            <li><img src={require('.././projects/project_assets/html5.png')}></img></li>
                            <li><img src={require('.././projects/project_assets/css.png')}></img></li>

                        </ul>
                    </div>
                </div>
                <div className='interests'>
                    <p className='interests-p'>Interests</p>
                    <ul className='interests-ul'>
                        <li>Fitness</li>
                        <li>Guitar</li>
                        <li>Mountain Biking</li>
                        <li>Disc Golf</li>
                        <li>Cooking</li>
                        <li>Target Archery</li>
                        <li>Science Fiction Books</li>
                        <li>Movies</li>
                        <li>Self-reflection and improvement</li>
                        <li>People-watching</li>
                    </ul>
                </div>
           </div>
       </section>
    )
}

export default About;