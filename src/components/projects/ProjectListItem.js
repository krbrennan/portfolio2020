import React from 'react'
import Icons from './Icons.js';

import './project_assets/projects.json';

// styles
import './projectListItem.scss';


const ProjectListItem = (props) => {

    const hasCode = props.project.code;

    return(
        <li className='project-list-item-li'>
            <div className='project-list-item-div'>
                <div className='top-div'>
                    <img className='image' src={ require(`${props.project.image}`) }></img>
                </div>
                <div className='bottom-div'>
                    <div className='project-btns'>
                        <span className='project-list-item-span'><a href={props.project.link} target="_blank">{props.project.name}</a></span>
                        {hasCode
                            ?
                            <span className='project-list-item-span'><a href={props.project.code} target="_blank">Github Code</a></span>
                            : <p>None</p> 
                        
                        }
                        
                        
                    </div>
                    {/* <p className='project-icons'>{props.project.icons}</p> */}
                    <Icons props={props.project.icons} />
                    <hr className='hr'></hr>
                    <p className='blurb'>{props.project.blurb}</p>
                    <hr className='hr'></hr>
                    <p className='project-api'><b>API used:</b> {props.project.api ? props.project.api : "none"}</p>
                </div>
            </div>
        </li>
    )
}

export default ProjectListItem;