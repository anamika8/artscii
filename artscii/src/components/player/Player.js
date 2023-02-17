import React from 'react';
import './Player.css'

const Player = (props) => {
    try {
        // Stretch: Parse URL for mode selection instead of passing in prop? TBD
        if (!props.playerMode) {
            throw new Error('Player Error: No mode sent!')
        }
        if (!props.url) {
            throw new Error('Player Error: No URL sent!')
        }
        // Throws an exception if string is not in URL format
        let processed_url = new URL(props.url);

        switch(props.playerMode)
        {
            case 'image':
                return(
                    <ImageDisplay url={processed_url.href} search={props.search}/>
                )
            case 'mp4':
                return(
                    <Mp4Display url={processed_url.href} search={props.search}/>
                )
            default:
                throw new Error('Player Error: Bad mode!');
        }
    }
    catch (err) {
        console.error(err)
        return(<ErrorStateDisplay/>)
    }
}

// Individual display components for different media
const ImageDisplay = (props) => {
    return(
        <div className='player-window'>
            <h2 className='title-text'>{props.search}</h2>
            <img src={props.url} alt={props.search} className='image-display'/>
        </div>
    )
}

const Mp4Display = (props) => {
    return(
        <div className='player-window'>
            <h2 className='title-text'>{props.search}</h2>
            <video className='video-display' controls>
                <source src={props.url} type="video/mp4"/>
            </video>
        </div>
    )
}

const ErrorStateDisplay = () => {
    return(
        <div className='player-window'>
            <h1>Something went wrong! Sorry about that</h1>
        </div>
    )
}

export default Player