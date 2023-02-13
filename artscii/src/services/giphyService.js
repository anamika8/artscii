import axios from "axios";

const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const DEFAULT_IMAGE_TO_SHOW = `https://media.giphy.com/media/fVeAI9dyD5ssIFyOyM/giphy.gif`;

// public function that can be called by the UI or other services
export async function getGiphyImageBySearchText(searchText = "",
    size = 'original',
    limit = 1,
    rating = 'g',
    lang = 'en') {
    const defaultSearchText = `coding shades hacker computer art`;
    if (searchText === "") {
        searchText = defaultSearchText;
    }
    searchText = searchText.split(' ').join('+');
    // creates the final API call
    const giphyApiCall = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${searchText}&limit=${limit}&offset=0&rating=${rating}&lang=${lang}`;

    // getting the response from Giphy API
    const giphyResponse = await callGiphyApiWithSearchText(giphyApiCall);
    if (giphyResponse === undefined || giphyResponse.length === 0) {
        // array does not exist or is empty
        console.log(`No response from giphy - hence displaying default image url`);
        return DEFAULT_IMAGE_TO_SHOW;
    }
    // return the original size image
    return giphyResponse.images[`${size}`].url;
}

// function to call the Giphy API
async function callGiphyApiWithSearchText(giphyApiCall) {
    try {
        const response = await axios.get(giphyApiCall);
        return response.data.data[0];
    } catch (error) {
        console.log(`Encountered error`)
        console.log(error)
        return [];
    }
}