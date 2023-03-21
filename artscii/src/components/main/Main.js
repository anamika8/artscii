import './Main.css';
import { useState, useRef } from 'react';
import loading_gif from '../../assets/loading-spinner.gif';
import {
    SearchTextTitle,
    DisplayManager,
    AsciifyButton,
    Input
} from '../components';
import { 
    convertToGrayScales, getStableDiffusionImageBySearchText, 
    drawAscii 
} from '../../services/services';

import DownloadButton from '../downloadButton/DownloadButton';

function Main() {
    const [searchParam, setSearchParam] = useState('');
    const [displayText, setDisplayText] = useState('');
    const [src, setSrc] = useState('');
    const [displayMode, setDisplayMode] = useState('waiting')
    const [preData, setPreData] = useState('');
    const [searchActive, setSearchActive] = useState(false);

    const updateTitle = (param) => {
        setDisplayText(param)
        setSearchParam('')
    }
    const handleSubmit = (e) => {
        if (!launchEasterEgg(searchParam)) {
            setDisplayMode('loading');
            setSearchActive(false);
            setSrc(loading_gif);
            setApiImage(searchParam);
        }
        updateTitle(searchParam)
        e.preventDefault();
    }

	const canvas = useRef();
    let width = 128;
    let height = 64;
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
                setDisplayMode('image')
                setSrc(imageUrl)
				loadImageToCanvas(imageUrl);
            })
            .catch(err => {
                console.log("error encountered = " + err);
            })
            .finally(() => {
                setSearchActive(true);
            });
    }

    const asciify = () => {
		const context = canvas.current.getContext('2d');
        const imageData = context.getImageData(0, 0, width, height);
        const grayScales = convertToGrayScales(context, imageData);
        const pre = drawAscii(grayScales, width);   
        setPreData(pre); 
        setDisplayMode('ascii');
        setSearchActive(false);
    }
    
    const launchEasterEgg = (text) => {
        if (text === '!pacman!') {
            setDisplayMode('easter');
            return true;
        }
        return false;
    }

  return (
      <div className='main'>	
          <SearchTextTitle displayText={displayText}/>
          <DisplayManager src={src} search={searchParam} displayMode={displayMode} preData={preData}/>
          <AsciifyButton searchActive={searchActive} asciify={asciify}/>
          <DownloadButton displayMode={displayMode} />
          <Input handleSubmit={handleSubmit} searchParam={searchParam} setSearchParam={setSearchParam}/>
		  <canvas 
				className='canvas'
			  	ref={canvas}
		  />
      	</div>
		);
};
export default Main;
