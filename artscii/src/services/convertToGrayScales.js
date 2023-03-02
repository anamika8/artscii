const convertToGrayScales = (context, imageData) => {
    const toGrayScale = (r, g, b) => 0.21 * r + 0.72 * g + 0.07 * b;
    const grayScales = [];

    for (let i = 0; i < imageData.data.length; i += 4) {
        const r = imageData.data[i];
        const g = imageData.data[i + 1];
        const b = imageData.data[i + 2];
        const grayScale = toGrayScale(r, g, b);
        imageData.data[i] = imageData.data[i + 1] = imageData.data[
        i + 2
        ] = grayScale;
        grayScales.push(grayScale);
    }
    
    context.putImageData(imageData, 0, 0);
    return grayScales;
};

export default convertToGrayScales;