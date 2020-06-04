import React from 'react'

// styles
import './projectListItem.scss';

const ProjectListItem = (props) => {
console.log(props)
    return(
        <li className='project-list-item-li'>
            <div className='project-list-item-div'>
                <div className='top-div'>
                    <p>Image goes here</p>
                </div>
                <div className='bottom-div'>
                    <h3 className='project-list-item-h3'>{props.project.name}</h3>
                    <p className='project-icons'>{props.project.icons}</p>
                    <p className='blurb'>{props.project.blurb}</p>
                    <p className='project-api'>{props.project.api}</p>
                </div>
            </div>
        </li>
    )
}

export default ProjectListItem;