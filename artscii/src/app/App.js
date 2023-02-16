import './App.css';
import Header from '../components/header/Header';
import { useState } from 'react';

function App() {
	const [searchParam, setSearchParam] = useState('');
	const [displayText, setDisplayText] = useState('');

	const updateTitle = (param) => {
		setDisplayText(param)
		setSearchParam('')
	}

	const handleSubmit = (e) => {
		updateTitle(searchParam)
		e.preventDefault();
	}
	
	return (
        	<div className="App">
        	<Header />
        	<img className='placeholder-gif' src='https://media.giphy.com/media/fVeAI9dyD5ssIFyOyM/giphy.gif' alt="placeholder-gif"/>
        	<p>Site under construction.</p>

			<h2>Searching for:</h2>
			<h2>{displayText}</h2>

			<div className='input-form'>
				<form onSubmit={e => handleSubmit(e)}>
					<input 
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

}

export default App;
