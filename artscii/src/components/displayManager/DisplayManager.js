import React from 'react';
import './display.css'
import { validateDisplayManagerProps } from './validateDisplayManagerProps';

// DisplayManager component to display URL, base64 encoded PNG and ASCII art to the app
// props: 
//  (string) src: url to image, base64 blob or ASCII
//  (string) displayMode: either url, rawImg or ascii
const DisplayManager = (props) => {
    try {
        validateDisplayManagerProps(props)
        switch(props.displayMode) {
            case 'image':
                return(
                    <div className='display-window'>
                        <ImageDisplay src={props.src} search={props.search}/>
                    </div>
                );
            case 'ascii':
                return(
                    <div className='display-window'>
                        <AsciiDisplay src={props.src} search={props.search}/>
                    </div>
                )
            default:
                throw new Error('Unexpected displayMode error');
        }
    } catch(err) {
        console.error("display Error: " + err);
        return(
            <div className='display-window'>
                <ErrorStateDisplay/>
            </div>
        )
    }
}

const ImageDisplay = (props) => {
    return(
        <div className='player-window'>
            <h2 className='title-text'>{props.search}</h2>
            <img src={props.src} alt={props.search} className="image-display"/>
        </div>
    )
}

const AsciiDisplay = (props) => {
    return(
        <h2>I haven't written this yet. It's on the way!</h2>
    )
}

const ErrorStateDisplay = () => {
    return(
        <div className='error-display'>
            <h1>Something went wrong! Sorry about that</h1>
        </div>
    )
}

export default DisplayManager