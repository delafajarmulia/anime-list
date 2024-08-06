"use client"

import { XCircle } from "@phosphor-icons/react"
import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const handleErrorVideoPlayer = () => {
        alert('sorry, this video error')
    }

    const Player = () => {
        return(
            <div className="fixed bottom-2 right-2">
                <button 
                    className="text-color-primary float-right px-3 mb-2"
                    onClick={handleVideoPlayer}>
                        <XCircle size={34} />
                </button>
                <YouTube 
                    videoId={youtubeId}
                    onReady={(event) => event.target.pauseVideo()}
                    opts={option} //nentuin panjang dan tingginya
                    onError={handleErrorVideoPlayer}
                />
            </div>
        )
    }

    const ButtonOpenPlayer = () => {
        return(
            <button 
                className="fixed rounded bottom-5 right-5 w-32 px-1 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl"
                onClick={handleVideoPlayer}>
                Tonton Trailer
            </button>
        )
    }

    const option = {
        width: "300",
        height: "250"
    }

    return isOpen ? <Player/> : <ButtonOpenPlayer />
}

export default VideoPlayer