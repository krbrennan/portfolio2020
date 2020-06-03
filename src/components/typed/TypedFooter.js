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
            <h3>explore</h3>
        </div>
    )
}

export default TypedFooter;