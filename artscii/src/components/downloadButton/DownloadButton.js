import React from 'react';
import downloadAscii from '../../services/downloadAscii';
import './DownloadButton.css';

const DownloadButton = (props) => {
    return (
        props.displayMode === 'ascii' && (
            <div className='download-button-container'>
                <button className='download-button' onClick={downloadAscii}>download</button>
            </div>
        )
    )
}

export default DownloadButton;