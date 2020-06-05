import React from 'react'

import './project_assets/projects.json';

// styles
import './projectListItem.scss';

require('./project_assets/weatherEssentials.jpeg');

const ProjectListItem = (props) => {
    // let image = ;
    // console.log({require(props.project.image)})
    return(
        <li className='project-list-item-li'>
            <div className='project-list-item-div'>
                <div className='top-div'>
                    <img className='image' src={ require(`${props.project.image}`) }></img>
                </div>
                <div className='bottom-div'>
                    <h3 className='project-list-item-h3'>{props.project.name}</h3>
                    <p className='project-icons'>{props.project.icons}</p>
                    <p className='blurb'>{props.project.blurb}</p>
                    <p className='project-api'>API used: {props.project.api ? props.project.api : "none"}</p>
                </div>
            </div>
        </li>
    )
}

export default ProjectListItem;