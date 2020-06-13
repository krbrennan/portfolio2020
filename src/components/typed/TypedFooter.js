import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';

// style
import './typed-footer.scss';

class TypedFooter extends React.Component {
    state = {
        displayBtn: false
    }

    displayProjectBtn = () => {
        this.setState({displayBtn: true})
    }

    render = () => {
        setTimeout(this.displayProjectBtn, 12000);
        return(
            <div className='home-footer'>
            <Typed 
                strings={["Hi there...","Check out my projects..."]}
                typeSpeed={200}
                backSpeed={100}
                className='typed-words'
                loop={false}
            />
            { this.state.displayBtn ? <Link to="/projects"><button className="projects-btn">explore</button></Link> : <Link to="/projects"><button className='hidden'></button></Link>}
        </div>
        )
    }
}

export default TypedFooter;