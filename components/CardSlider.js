import React from 'react'
import Card from './Card'

const CardSlider = ({ title }) => {
    return (
        <>
            <div className='card-slider-title'>
                <h4>{title}</h4>
                <a href='#'>See more</a>
            </div>
            <div className='card-slider-container'>
                <Card />
                <Card />
            </div>
        </>
    )
}

export default CardSlider