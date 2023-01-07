import React from 'react'

const Card = ({data}) => {
    return (
        <div className='card-container'>
            <img src={data.thumbnails.medium.url} alt className='video-thumbnail' />
            <div className='card-title-section'>
                <img src="https://i.ytimg.com/vi/gwZklieJmtM/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARgRIGAocjAP&rs=AOn4CLBMJIO4fppVGEun1SnoT0-nMash_g" alt className='channel-thumbnail' />
                <p className='card-title'>{data.title}</p>
            </div>
            <div className='card-info-section'>
                <p className='channel-name'>{data.channelTitle}</p>
                <p className='views'>3212 views</p>
                <p className='posted-date'>1 week</p>

            </div>
        </div>
    )
}

export default Card