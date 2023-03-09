import { render } from "@testing-library/react";
import DisplayManager from '../components/displayManager/DisplayManager'

// Mocking validateDisplayManagerProps as that is not the SUT
jest.mock('../components/displayManager/validateDisplayManagerProps', () => ({ validateDisplayManagerProps: jest.fn() }))
console.error = jest.fn()   // silence console.error() for testing
let testDisplayManager;


beforeEach(() => {
    testDisplayManager = <DisplayManager src='abc' displayMode='image'/>
})


// Tests begin...
test("renders DisplayManager component", () => {
    render(
        testDisplayManager
    );
    const displayManagerElement = document.querySelector(".display-window");
    expect(displayManagerElement).toBeInTheDocument();
});

test("renders ImageDisplay component", () => {
    render(
        testDisplayManager
    );
    const imageDisplayElement = document.querySelector("#image-display-window");
    expect(imageDisplayElement).toBeInTheDocument();
});

test("renders AsciiDisplay component", () => {
    testDisplayManager = <DisplayManager src='abc' displayMode='ascii'/>
    render(
        testDisplayManager
    );
    const asciiDisplayElement = document.querySelector("#ascii-display-window");
    expect(asciiDisplayElement).toBeInTheDocument();
});

test("renders ErrorDisplay component", () => {
    testDisplayManager = <DisplayManager displayMode='this-is-a-phony-mode'/>
    render(
        testDisplayManager
    );
    const errorDisplayElement = document.querySelector("#error-display-window");
    expect(errorDisplayElement).toBeInTheDocument();
});