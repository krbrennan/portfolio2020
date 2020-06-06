import React from 'react'

import './icons.scss';

const Icons = (props) => {
    // console.log(props.props)
    const icons = props.props.map((ele) => {
        return(
            <li className='icon'><img src={ require(`${ele}`) }></img></li>
        )
    })
    return(
        <ul className='icon-ul'>
            { icons }
        </ul>
    )
}

export default Icons;