import React from 'react';

import Navbar from '../navbar/Navbar.js';

import './connect.scss';

const Connect = () => {
    return(
        <section>
            <Navbar />
            <div className='connect'>
                <h2 className='header'>Connect with me</h2>
                <div className='connect-div'>
                    <img src={require('../../assets/github.svg')}></img>
                    <img src={require('../../assets/linkedin.svg')}></img>
                    <img src={require('../../assets/gmail.svg')}></img>
                    <img src={require('../../assets/facebook.svg')}></img>
                </div>
            </div>
        </section>
    )
}

export default Connect;