import React from 'react';
import { Link } from 'react-router-dom';

// style
import './navbar.scss';
import './hamburger.scss';

class Navbar extends React.Component{
    state = {
        hamburger: false,
        width: null,
        height: null,
        active: false
    }

    constructor(props){
        super(props);
        this.state.width = 0;
        this.state.height = 0;
        this.updateWindowDims = this.updateWindowDims.bind(this);
        this.toggleIsActive = this.toggleIsActive.bind(this);
    }

    componentDidMount(){
        this.updateWindowDims();
        window.addEventListener('resize', this.updateWindowDims)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDims() {
        let windowWidth = window.innerWidth;
        this.setState({ width: windowWidth, height: window.innerHeight });
        if(windowWidth < 800){
            this.setState({
                hamburger:true
            })
        } else {
            this.setState({
                hamburger: false
            })
        }
    }
    toggleHamburger = () => {
        this.setState({
            hamburger:true
        })
    }
    toggleIsActive = () => {
        this.setState({
            active: !this.state.active
        })
    }
    render = () => {
        let burger = this.state.hamburger;
        // console.log(this.state.width)
        return(
            <section>
                <div className='nav-div'>
                    {burger ?(
                        <div className='hamburger-nav'>
                            <button className={this.state.active ? "hamburger hamburger--collapse is-active" : "hamburger hamburger--collapse"}  type="button"
                            onClick={this.toggleIsActive}>
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                            </button>
                            <div className={ this.state.active ? "show-nav" : "hide-nav"}>
                                <ul className='hamburger-ul'>
                                    <li className='hamburger-li'><Link to='/portfolio2020/'>Home</Link></li>
                                    <li className='hamburger-li'><Link to='/portfolio2020/projects'>Projects</Link></li>
                                    <li className='hamburger-li'><Link to='/about'>About</Link></li>
                                    <li className='hamburger-li'><Link to='/portfolio2020/connect'>Contact</Link></li>
                                </ul>
                            </div>  
                        </div>  
                        
                    ) : (
                        <div className='nav'>
                        <div className='nav-home'>
                            <a className='nav-home-a' href='/portfolio2020/'>
                                <p className='nav-li'>Home</p>
                            </a>
                        </div>
                        <ul className='nav-ul'>
                            <a className='nav-a' href='/portfolio2020/projects'>
                                <li className='nav-li'>Projects</li>
                            </a>
                            <a className='nav-a' href='/portfolio2020/about'>
                                <li className='nav-li'>About</li>
                            </a>
                            <a className='nav-a' href='/portfolio2020/connect'>
                                <li className='nav-li'>Connect</li>
                            </a>
                        </ul>
                    </div>
                    )}
            </div>
            </section>

        );
    }
}

export default Navbar;