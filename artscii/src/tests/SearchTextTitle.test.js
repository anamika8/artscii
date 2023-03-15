import React from 'react';
import {render, screen} from '@testing-library/react';
import SearchTextTitle from '../components/searchTextTitle/SearchTextTitle';

describe('SearchTextTitle', () => {
    test('renders search text label and value', () => {
        const searchText = 'Test Search';
        render(<SearchTextTitle displayText={searchText}/>);
        const searchTextLabel = screen.getByText('Searching for:');
        const searchTextValue = screen.getByText(searchText);
        expect(searchTextLabel).toBeInTheDocument();
        expect(searchTextValue).toBeInTheDocument();
        expect(searchTextLabel.nextSibling).toBe(searchTextValue);
    });

    test('renders empty div when displayText is falsy', () => {
        render(<SearchTextTitle displayText={null}/>);
        const searchEmptyDiv = screen.getByTestId('search-empty');
        expect(searchEmptyDiv).toBeInTheDocument();
    });
});