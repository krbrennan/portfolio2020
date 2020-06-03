import React from 'react';

import Navbar from '../navbar/Navbar.js';

// style
import './home.scss';

const Home = () => {
    return(
        <section>
            <Navbar />
            <div className='home'>
                <img className='background-img' src={require('../../assets/background1.jpg')}></img>
                <div className='home-content'>
                    <h1>Kevin Brennan</h1>
                    <h3>Software Developer</h3>
                </div>
            </div>
        </section>
    )
}

export default Home;