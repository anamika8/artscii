import axios from "axios";

const GIPHY_API_KEY = `7bcbIq6rDmXAuPqfDLaa1TrL7dN0q47w`;
const DEFAULT_IMAGE_TO_SHOW = `https://media.giphy.com/media/fVeAI9dyD5ssIFyOyM/giphy.gif`;

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
    console.log(`q = ${searchText}`);
    const giphyApiCall = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${searchText}&limit=${limit}&offset=0&rating=${rating}&lang=${lang}`;

    const giphyResponse = await callGiphyApiWithSearchText(giphyApiCall);
    if (giphyResponse === undefined || giphyResponse.length === 0) {
        // array does not exist or is empty
        console.log(`No response from giphy - hence displaying default image url`);
        return DEFAULT_IMAGE_TO_SHOW;
    }
    console.log(`Giphy API Response = ${giphyResponse}`)
        // return the original size image
    console.log(`Giphy Response url = ${giphyResponse.images.original.url}`)
    return giphyResponse.images.original.url;
}

async function callGiphyApiWithSearchText(giphyApiCall) {
    console.log(`Calling the API - ${giphyApiCall}`)
    try {
        const response = await axios.get(giphyApiCall);
        console.log('response  - ', response.data.data[0])
        return response.data.data[0];
    } catch (error) {
        console.log(`Encountered error`)
        console.log(error)
        return [];
    }
}