import { expect, jest } from '@jest/globals';
import home_gif from '../assets/home.gif'
const { getStableDiffusionImageBySearchText } = require('../services/stableDiffusionService')
const axios = require('axios')
const fs = require('fs')
const path = require("path");

jest.mock('axios')

async function readFileAsBinary(filename) {
    return fs.readFileSync(path.resolve(__dirname, filename))
}

it('should return stable diffusion image', async() => {
    const mockBinaryData = await readFileAsBinary('../assets/check-mark.png');
    expect(mockBinaryData).not.toBeNull();
    const base64MockImage = Buffer.from(mockBinaryData, 'binary').toString('base64')
    axios.request.mockResolvedValue({
        data: mockBinaryData
    });
    const imageData = await getStableDiffusionImageBySearchText("unit_test");
    var expectedImageData = `data:image/png;base64, ${base64MockImage}`;
    expect(imageData).not.toBeNull();
    expect(imageData).toEqual(expectedImageData);
});

it('should return default image if stable diffusion returns undefined', async() => {
    axios.request.mockResolvedValue({
        data: undefined
    });
    const imageData = await getStableDiffusionImageBySearchText("unit_test");
    var expectedImageData = home_gif;
    expect(imageData).not.toBeNull();
    expect(imageData).toEqual(expectedImageData);
});

it('should return image based on default text if search string not provided', async() => {
    const mockBinaryData = await readFileAsBinary('../assets/check-mark.png');
    expect(mockBinaryData).not.toBeNull();
    const base64MockImage = Buffer.from(mockBinaryData, 'binary').toString('base64')
    axios.request.mockResolvedValue({
        data: mockBinaryData
    });
    const imageData = await getStableDiffusionImageBySearchText("");
    var expectedImageData = `data:image/png;base64, ${base64MockImage}`;
    expect(imageData).not.toBeNull();
    expect(imageData).toEqual(expectedImageData);
});