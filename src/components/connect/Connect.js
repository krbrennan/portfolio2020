import React from 'react';
import Footer from '../footer/Footer.js';

import Navbar from '../navbar/Navbar.js';

import './connect.scss';

const Connect = () => {
    return(
        <section>
            <Navbar />
            <div className='connect'>
                <h2 className='header'>Connect with me</h2>
                <div className='connect-div'>
                    <a href='https://github.com/krbrennan/' target='_blank' rel='noreferrer noopener'><img src={require('../../assets/github.svg')}></img></a>
                    <a href='https://www.linkedin.com/in/kevin-brennan/' target='_blank' rel='noreferrer noopener'><img src={require('../../assets/linkedin.svg')}></img></a>
                    <a id='email' href='https://mail.google.com/mail/?view=cm&fs=1&to=krb.brennan@gmail.com' target='_blank' rel='noreferrer noopener'><img src={require('../../assets/gmail.svg')}></img></a>        
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Connect;