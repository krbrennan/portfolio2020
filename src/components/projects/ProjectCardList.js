import React from 'react';
import ProjectListItem from './ProjectListItem';

// style
import './projectCardList.scss';

const ProjectCardList = (props) => {
    // console.log(props.projects)
    const ProjectItems = props.projects.map((proj) => {
        return(
            <ProjectListItem 
                project={proj}
            />
        );
    });

    return(
        <ul className='list'>
            {ProjectItems}
        </ul>
    );
};


export default ProjectCardList;