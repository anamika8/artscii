import './App.css';
import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import { getGiphyImageBySearchText } from '../services/giphyService';

function App() {

    const [imageUrl, setImageUrl] = useState('')

    useEffect(() => {
        getGiphyImageBySearchText()
            .then(imageUrl => {
                console.log(`Image URL received in UI - ${imageUrl}`)
                setImageUrl(imageUrl)
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
