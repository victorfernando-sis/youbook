import React from 'react'
import Card from './Card'


const CardSlider = ({ title, data }) => {

    // const {data, error} = useSWR(' /api/youtube.js', fetcher)
    console.log('Card',data)
    return (
        <>
            <div className='card-slider-title'>
                <h4>{title}</h4>
                <a href='#'>See more</a>
            </div>
            <div className='card-slider-container'>
                {data?.map(video => {
                    return <Card key={video.id.videoId} data={video.snippet} />
                })}
            </div>
        </>
    )
}

export default CardSlider