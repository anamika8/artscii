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
                        <ImageDisplay src={props.src} search={props.search} asciify={props.asciify} setDisplayMode={props.setDisplayMode}/>
                    </div>
                );
            case 'ascii':
                return(
                    <div className='display-window'>
                        <AsciiDisplay src={props.src} search={props.search} preData={props.preData} />
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
            <button className='ascii-button' onClick={props.asciify}>asciify</button>
        </div>
    )
}

const AsciiDisplay = (props) => {
    return(
        <div>
            <pre id='ascii'>{props.preData}</pre>
        </div>
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