import { expect } from '@jest/globals';
import { 
    convertToGrayScales, 
    drawAscii 
} from '../services/services';
import dummyImgSrc from './dummyImgSrc';

const image = new Image();
image.src = dummyImgSrc;
const width = 256;
const height = 128;
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
image.onload = () => {
    canvas.width = width;
    canvas.height = height;
    context.drawImage(image, 0, 0, width, height);
};
const imageData = context.getImageData(0, 0, width, height);
const grayScales = convertToGrayScales(context, imageData);

describe('Convert to Gray Scales - grayScales Has Values', () => {
    test('should return grayScales', () => {
        expect(grayScales).not.toBeNull;
    });
});

describe('Convert to Gray Scales Each RGB value synced', () => {
    test('should return grayScales', () => {
        let allRGBValuesCombineToGray = true;
        for (let i = 0; i < imageData.data.length; i += 4) {
            if (!grayScales[i] === grayScales[i+1] && grayScales[i+1] === grayScales[i+2]) {
                allRGBValuesCombineToGray = false;
            }
        };
        expect(allRGBValuesCombineToGray).toEqual(true);
    });
});

describe('Draw Ascii returns text value', () => {
    test('should return grayScales', () => {
        const asciiText = drawAscii(grayScales, width);
        expect(asciiText).not.toBeUndefined;
    });
});
