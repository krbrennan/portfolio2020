import React from 'react'

const ProjectListItem = (props) => {
console.log(props)
    return(
        <li>
            <div>
                <h3>{props.project.name}</h3>
            </div>
        </li>
    )
}

export default ProjectListItem;