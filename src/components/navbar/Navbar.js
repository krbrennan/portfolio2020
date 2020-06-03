import React from 'react';

// style
import './navbar.scss';

const Navbar = () => {
    return(
        <div className='nav'>
            <div className='nav-home'>
                <a className='nav-home-a' href='/'>
                    <p className='nav-li'>Home</p>
                </a>
            </div>
            <ul className='nav-ul'>
                <a className='nav-a' href='/projects'>
                    <li className='nav-li'>Projects</li>
                </a>
                <a className='nav-a' href='/about'>
                    <li className='nav-li'>About</li>
                </a>
                <a className='nav-a' href='/connect'>
                    <li className='nav-li'>Connect</li>
                </a>
            </ul>
        </div>
    )
}

export default Navbar;