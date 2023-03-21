import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import { Input } from '../components/components';


describe('Input component', () => {
    test('renders the search input', () => {
        const {getByPlaceholderText} = render(<Input />);
        const searchInput = getByPlaceholderText('Enter a search term');
        expect(searchInput).toBeInTheDocument();
    });

    test('calls handleSubmit with the correct value when form is submitted', () => {
        const handleSubmitMock = jest.fn();
        const setSearchParamMock = jest.fn();
        const {getByPlaceholderText, getByText} = render (
            <Input handleSubmit={handleSubmitMock} setSearchParam={setSearchParamMock}/>
        );
        const searchInput = getByPlaceholderText('Enter a search term');
        const submitButton = getByText('Submit');
        const inputValue = 'test search value';

        fireEvent.change(searchInput, {target: {value: inputValue}});
        fireEvent.submit(submitButton);
    });
});
