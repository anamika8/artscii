// mapping the grayscale to a character array was taken from https://marmelab.com/blog/2018/02/20/convert-image-to-ascii-art-masterpiece.html

const drawAscii = (grayScales, width) => {
    const grayRamp = "@80GCLft1i;;,.";
    const rampLength = grayRamp.length;
    
    const getCharacterForGrayScale = (grayScale) =>
        grayRamp[Math.ceil(((rampLength - 1) * grayScale) / 255)];

    const ascii = grayScales.reduce((asciiImage, grayScale, index) => {
        let nextChars = getCharacterForGrayScale(grayScale);
        if ((index + 1) % width === 0) {
            nextChars += '  ';
        }
        return asciiImage + nextChars;
    }, "");
    return ascii;
};

export default drawAscii;
