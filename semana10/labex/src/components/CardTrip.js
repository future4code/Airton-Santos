import React from 'react'

export default function CardTrip(props) {
    return (
        <>
            <h6>{props.planet}</h6>
            <h6>{props.name}</h6>
            <h6>{props.date}</h6>
            <h6>{props.durationInDays}</h6>
            <h6>{props.description}</h6>
        </>
    )
}