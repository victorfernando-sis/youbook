import React from 'react'
import { useRouter } from 'next/router'
// import { GrBackTen, AiFillPlayCircle, AiFillPauseCircle, GrForwardTen } from 'react-icons';
import { MdBookmarks, MdFileDownload } from "react-icons/md";


const PlayScreen = () => {
    const router = useRouter()
    const { vid } = router.query




    return (
        <div >
            <iframe id="player" type="text/html" width="100%" height="220vh"
                src={`http://www.youtube.com/embed/${vid}?enablejsapi=1&origin=http://youbook.com`}
                frameborder="0">
            </iframe>
            <div className='video-controls'>
                <MdBookmarks />
                <MdFileDownload />
            </div>
            <iframe src={`https://convert2mp3s.com/api/single/mp3?url=https://www.youtube.com/watch?v=${vid}`} width="100%" height="100%" allowtransparency="true" scrolling="no" ></iframe>
        </div>
    )
}

export default PlayScreen
