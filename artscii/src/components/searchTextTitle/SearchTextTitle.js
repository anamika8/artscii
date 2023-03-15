import React from 'react';
import './SearchTextTitle.css';

const SearchTextTitle = ({displayText}) => {
    return displayText ? (
            <div className='search-text-container'>
                <h2 id='search-text-label'>Searching for:</h2>
                <h2 id='search-text'>{displayText}</h2>
            </div>
        ) : (
            <div data-testid='search-empty' className='search-empty'></div>
        )
}

export default SearchTextTitle;