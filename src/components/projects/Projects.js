import React from 'react';

import Navbar from '../navbar/Navbar.js';
import values from './project_assets/projects.json';

import ProjectCardList from './ProjectCardList.js';

// style
import './projects.scss';

class Projects extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            projList: values
        }
    }

    render = (props) => {
        return(
            <section className='project-section'>
                <Navbar />
                <div className='project-content'>
                    <h2 className='project-header'>Projects</h2>
                    <ProjectCardList projects={this.state.projList}/>
                </div>
            </section>
        )

    }
    
}

export default Projects;