import Link from 'next/link'
import React from 'react'
import Card from './Card'


const CardSlider = ({ title, data }) => {
    console.log(title, data)
    return (
        <div>
            <div className='card-slider-title'>
                <h4>{title}</h4>
                <a href='#'>See more</a>
            </div>
            <div className='card-slider-container'>
                {data?.map(video => {
                    return (
                        <Link key={video.id.videoId} href={`play/${video.id.videoId}`}>
                            <Card key={video.id.videoId} data={video.snippet} />
                        </Link>
                        )
                })}
            </div>
        </div>
    )
}

export default CardSlider