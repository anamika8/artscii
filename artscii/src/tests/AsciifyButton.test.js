import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import { AsciifyButton } from '../components/components';

describe('AsciifyButton', () => {
    test('renders button when search is active', () => {
        const asciifyMock = jest.fn();
        const {getByText} = render(
            <AsciifyButton searchActive={true} asciify={asciifyMock}/>
        );
        const button = getByText('asciify');
        fireEvent.click(button);
        expect(asciifyMock).toHaveBeenCalled();
    });

    test('does not render button when search not active', () => {
        const {queryByText} = render(
            <AsciifyButton searchActive={false} asciify={jest.fn()}/>
        );
        const button = queryByText('asciify');
        expect(button).toBeNull();
    });
});