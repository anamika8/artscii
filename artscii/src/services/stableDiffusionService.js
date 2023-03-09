import axios from "axios";
import home_gif from '../assets/home.gif'
let Buffer = require('buffer').Buffer

// default width and height of the image to keep API billing cost in check
const DEFAULT_IMAGE_WIDTH = 512
const DEFAULT_IMAGE_HEIGHT = 512
const DEFAULT_UPSCALE = 1

const STABLE_DIFFUSION_API_KEY = process.env.REACT_APP_STABLE_DIFFUSION_API_KEY;
const DEFAULT_IMAGE_TO_SHOW = home_gif;
const DEZGO_HOST_URL = `https://dezgo.p.rapidapi.com/text2image`;
const DEFAULT_SEARCH_TEXT = `an astronaut riding a horse, digital art, epic lighting, highly-detailed masterpiece trending HQ`;

// public function that can be called by the UI or other services
export async function getStableDiffusionImageBySearchText(searchText = "",
    sampler = 'dpm',
    upscale = DEFAULT_UPSCALE,
    steps = 30,
    model = 'stablediffusion_1_5',
    guidance = 8,
    width = DEFAULT_IMAGE_WIDTH,
    height = DEFAULT_IMAGE_HEIGHT) {
    if (searchText === "") {
        searchText = DEFAULT_SEARCH_TEXT;
    }
    const encodedParams = new URLSearchParams();
    encodedParams.append("upscale", upscale);
    encodedParams.append("steps", steps);
    encodedParams.append("sampler", sampler);
    encodedParams.append("prompt", searchText);
    encodedParams.append("model", model);
    encodedParams.append("guidance", guidance);
    encodedParams.append("width", width);
    encodedParams.append("height", height);
    // getting the response from Dezgo API
    const imageBase64 = await callStableDiffusionWithPrompt(encodedParams);
    if (imageBase64 === undefined) {
        console.log(`No response from Dezgo API - hence displaying default image url`);
        return DEFAULT_IMAGE_TO_SHOW;
    }
    var image = `data:image/png;base64, ${imageBase64}`;
    return image;
}
// function to call the Stable Diffusion API
async function callStableDiffusionWithPrompt(encodedParams) {
    const options = {
        method: 'POST',
        url: DEZGO_HOST_URL,
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': STABLE_DIFFUSION_API_KEY,
            'X-RapidAPI-Host': 'dezgo.p.rapidapi.com'
        },
        data: encodedParams,
        responseType: "arraybuffer"
    };
    try {
        const response = await axios.request(options);
        return Buffer.from(response.data, 'binary').toString('base64')
    } catch (error) {
        console.log(`Encountered error`)
        console.log(error)
        return undefined;
    }
}