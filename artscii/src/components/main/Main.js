import './Main.css';
import DisplayManager from '../displayManager/DisplayManager';
import loading_gif from '../../assets/loading.gif';
import home_gif from '../../assets/home.gif'
import { useState, useRef } from 'react';
import { getStableDiffusionImageBySearchText } from '../../services/stableDiffusionService';
import convertToGrayScales from '../../services/convertToGrayScales';
import drawAscii from '../../services/drawAscii';

function Main() {
    const [searchParam, setSearchParam] = useState('');
    const [displayText, setDisplayText] = useState('');
    const [src, setSrc] = useState(home_gif);
    const [displayMode, setDisplayMode] = useState('image')
    const [loading, setLoading] = useState(false)
	const [preData, setPreData] = useState('');

    const updateTitle = (param) => {
        setDisplayText(param)
        setSearchParam('')
    }
    const handleSubmit = (e) => {
        setDisplayMode('image');
        updateTitle(searchParam)
        setApiImage(searchParam);
        setLoading(true);
        e.preventDefault();
    }

	const canvas = useRef();
    let width = 256;
    let height = 128;
	let image;

	const loadImageToCanvas = (imageUrl) => {
		image = new Image();
		image.src = imageUrl;
        const context = canvas.current.getContext('2d');
        image.onload = () => {
            canvas.width = width;
            canvas.height = height;
            context.drawImage(image, 0, 0, width, height);
        };
	}

    const setApiImage = (searchParam) => {
        getStableDiffusionImageBySearchText(searchParam)
            .then(imageUrl => {
                console.log(`Image URL received in UI - ${imageUrl}`)
                setDisplayMode('image')
                setSrc(imageUrl)
				loadImageToCanvas(imageUrl);
            })
            .catch(err => {
                console.log("error encountered = " + err);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    const asciify = () => {
		const context = canvas.current.getContext('2d');
        const imageData = context.getImageData(0, 0, width, height);
        const grayScales = convertToGrayScales(context, imageData);
        const pre = drawAscii(grayScales, width);   
        setPreData(pre); 
        setDisplayMode('ascii');
    }

  return (
      <div className='main'>	
          <h2>Searching for:</h2>
          <h2>{displayText}</h2>
          {loading ? (
            <DisplayManager src={loading_gif} search={searchParam} displayMode={displayMode}/>
          ) : (
            <DisplayManager src={src} search={searchParam} displayMode={displayMode} asciify={asciify} preData={preData}/>
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
		  <canvas 
				className='canvas'
			  	ref={canvas}
		  />
      	</div>
		);
};
export default Main;
