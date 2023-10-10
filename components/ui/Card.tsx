import React, { ReactNode } from 'react'

import classes from './Card.module.css'

interface CardProps{
    children: ReactNode; // Use ReactNode to allow any valid React content as children
}


const Card: React.FC<CardProps> = (props) => {
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    )
}

export default Card