const drawAscii = (grayScales, width) => {
    const grayRamp = "@80GCLft1i;;,.";
    const rampLength = grayRamp.length;
    // the grayScale value is an integer ranging from 0 (black) to 255 (white)
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
