import { validateDisplayManagerProps, validModes } from '../components/displayManager/validateDisplayManagerProps';
import { expect } from '@jest/globals';

// test objects
let testProps;
console.error = jest.fn()   // silence console.error() for testing

beforeEach(() => {
    testProps = {displayMode: 'ascii', src: 'abcdefg'}
})


// Tests begin...
it('should accept valid mode and src props', () => {
    validModes.forEach(mode => {
        testProps.displayMode = mode;
        expect(() => {
            validateDisplayManagerProps(testProps)
        }).not.toThrowError();
    });
});

it('should throw error for invalid props.displayMode', () => {
    testProps.displayMode = 'drama-bomb';
    expect(() => {
        validateDisplayManagerProps(testProps)
    }).toThrowError('Invalid Display Type');
})

it('should throw error for empty props.displayMode', () => {
    testProps.displayMode = '';
    expect(() => {
        validateDisplayManagerProps(testProps)
    }).toThrowError('No displayMode sent to component!');
})

it('should throw error for missing props.displayMode', () => {
    let testProps2 = {}
    expect(() => {
        validateDisplayManagerProps(testProps2)
    }).toThrowError('No displayMode sent to component!');
})

it('should throw error for empty props.src value when not using "waiting" display mode', () => {
    testProps.src = '';
    expect(() => {
        validateDisplayManagerProps(testProps)
    }).toThrowError('No src sent to component!');
})

it('should not throw error for empty props.src value when using "waiting" displayMode', () => {
    testProps.src = '';
    testProps.displayMode = 'waiting';
    expect(() => {
        validateDisplayManagerProps(testProps)
    }).not.toThrowError();
})