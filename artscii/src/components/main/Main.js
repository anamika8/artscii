import './Main.css';
import loading_gif from '../../assets/loading.gif';
import Player from '../player/Player';
import { useState } from 'react';
import { getStableDiffusionImageBySearchText } from '../../services/stableDiffusionService';

function Main() {
    const [searchParam, setSearchParam] = useState('');
    const [displayText, setDisplayText] = useState('');
    const [playerMode, setPlayerMode] = useState('image')
    const [imageUrl, setImageUrl] = useState('https://media.giphy.com/media/fVeAI9dyD5ssIFyOyM/giphy.gif')
    const [loading, setLoading] = useState(false)

    const updateTitle = (param) => {
        setDisplayText(param)
        setSearchParam('')
    }

    const handleSubmit = (e) => {
        updateTitle(searchParam)
        setApiImage(searchParam);
        setLoading(true);
        e.preventDefault();
    }

    const updatePlayerData = (new_url, new_search, new_playerMode) => {
        setImageUrl(new_url);
        setSearchParam(new_search);
        setPlayerMode(new_playerMode);
    }

    const setApiImage = (searchParam) => {
        getStableDiffusionImageBySearchText(searchParam)
            .then(imageUrl => {
                console.log(`Image URL received in UI - ${imageUrl}`)
                setImageUrl(imageUrl)
            })
            .catch(err => {
                console.log("error encountered = " + err);
            })
            .finally(() => {
                setLoading(false);
            });
    }


  return (
      <div className='main'>
          <h2>Searching for:</h2>
          <h2>{displayText}</h2>
          {loading ? (
            <Player url={loading_gif} playerMode={playerMode} />
          ) : (
            <Player url={imageUrl} search={searchParam} playerMode={playerMode}/>
          )}
          <p>Site under construction.</p>
  
          <div className='input-form'>
              <form onSubmit={e => handleSubmit(e)}>
                  <input 
                      className='search-input'
                      type='text'
                      value={searchParam}
                      placeholder="Enter a search term"
                      onChange={e => setSearchParam(e.target.value)}
                  />
                  <input 
                      type='submit'
                      value='Submit'
                  />
              </form>
          </div>
      </div>
  );
};
export default Main;
