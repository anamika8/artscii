import React from 'react';
import './display.css'
import { validateDisplayManagerProps } from './validateDisplayManagerProps';

const DisplayManager = (props) => {
    try {
        validateDisplayManagerProps(props)
        switch(props.displayMode) {
            case 'image':
                return(
                    <div className='display-window'>
                        <ImageDisplay src={props.src} search={props.search} setDisplayMode={props.setDisplayMode}/>
                    </div>
                );
            case 'ascii':
                return(
                    <div className='display-window'>
                        <AsciiDisplay src={props.src} search={props.search} preData={props.preData} />
                    </div>
                )
            case 'loading':
                return(
                    <div className='display-window'>
                        <LoadingDisplay src={props.src}/>
                    </div>
                )
            case 'waiting':
                return(
                    <div className='display-window'>
                        <WaitingDisplay/>
                    </div>
                )
            case 'easter':
                return(
                    <iframe className='easter' title='Pacman' src='https://dos.zone/player/?bundleUrl=https%3A%2F%2Fcdn.dos.zone%2Foriginal%2F2X%2F5%2F5cdcffbf268b3be0555025902b52a8d21ad595b9.jsdos?anonymous=1'/>
                )
            default:
                throw new Error('Unexpected displayMode error');
        }
    } catch(err) {
        console.error("DisplayManager: " + err);
        return(
            <div className='display-window'>
                <ErrorStateDisplay/>
            </div>
        )
    }
}

const ImageDisplay = (props) => {
    return(
        <div className='player-window' id='image-display-window'>
            <h2 className='title-text'>{props.search}</h2>
            <img src={props.src} alt={props.search} className="image-display"/>
        </div>
    )
}

const AsciiDisplay = (props) => {
    return(
        <div className='player-window' id='ascii-display-window'>
            <pre id='ascii'>{props.preData}</pre>
        </div>
    )
}

const ErrorStateDisplay = () => {
    return(
        <div className='player-window' id='error-display-window'>
            <h1>Something went wrong! Sorry about that</h1>
        </div>
    )
}

const LoadingDisplay = (props) => {
    return(
        <div className='player-window' id='loading-display-window'>
            <img src={props.src} alt='loading' className='loading-display'/>
        </div>
    )
}

const WaitingDisplay = () => {
    return(
        <div className='player-window' id='waiting-display-window'>
            <p>Submit a search below to get started!</p>
        </div>
    )
}

export default DisplayManager