import './App.css';
import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import { getGiphyImageBySearchText } from '../services/giphyService';

const DEFAULT_IMAGE_TO_SHOW = `https://media.giphy.com/media/fVeAI9dyD5ssIFyOyM/giphy.gif`;

function App() {

    const [imageUrl, setImageUrl] = useState('')

    useEffect(() => {
        getGiphyImageBySearchText()
            .then(imageUrl => {
                console.log(`Image URL received in UI - ${imageUrl}`)
                setImageUrl(imageUrl)
            })
            .catch(err => {
                console.log("error encountered = " + err);
                setImageUrl(DEFAULT_IMAGE_TO_SHOW);
            });
    }, [])

    return (
        <div className="App">
        <Header />
        <img
        className='placeholder-gif' src={imageUrl} alt="placeholder-gif"/>
        <p>Site under construction.</p>
        </div>
    );

}

export default App;
