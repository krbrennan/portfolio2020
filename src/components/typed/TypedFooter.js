import React from 'react';
import Typed from 'react-typed';

// style
import './typed-footer.scss';

const TypedFooter = () => {
    return(
        <div className='home-footer'>
            <Typed 
                strings={["Hi there...","Check out my projects..."]}
                typeSpeed={200}
                backSpeed={100}
                className='typed-words'
                loop={true}
            />
            <a className='projects-btn-a' target='_blank' href='/projects'><h3 className='projects-btn'>explore</h3></a>
        </div>
    )
}

export default TypedFooter;