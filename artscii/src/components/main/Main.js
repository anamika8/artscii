import './Main.css';
import DisplayManager from '../displayManager/DisplayManager';
import loading_gif from '../../assets/loading.gif';
import home_gif from '../../assets/home.gif'
import { useState } from 'react';
import { getStableDiffusionImageBySearchText } from '../../services/stableDiffusionService';

function Main() {
    const [searchParam, setSearchParam] = useState('');
    const [displayText, setDisplayText] = useState('');
    const [src, setSrc] = useState(home_gif)
    const [displayMode, setDisplayMode] = useState('image')
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

    const setApiImage = (searchParam) => {
        getStableDiffusionImageBySearchText(searchParam)
            .then(imageUrl => {
                console.log(`Image URL received in UI - ${imageUrl}`)
                setDisplayMode('image')
                setSrc(imageUrl)
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
            <DisplayManager src={loading_gif} search={searchParam} displayMode={displayMode}/>
          ) : (
            <DisplayManager src={src} search={searchParam} displayMode={displayMode}/>
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
