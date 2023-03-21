import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';

const downloadAscii = async () => {
    const asciiArt = document.getElementById('ascii-display-window');
    const canvas = await html2canvas(asciiArt);
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, 'ascii-art.png', 'image/png');
};

export default downloadAscii;
