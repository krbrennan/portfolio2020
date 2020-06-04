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
        // let ProjCardList = this.state.projList.map((project) => {
        //     return(
        //         <ProjectCardList projects={project} />
        //     )
        // });

        return(
            <section>
                <Navbar />
                <ProjectCardList projects={this.state.projList}/>
            </section>
        )

    }
    
}

export default Projects;