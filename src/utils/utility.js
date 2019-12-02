import { envConfig } from "./env";

export function getGiphyUrl(searchTerm, wierdness) {
    const { giphy: { apiendpoint, apikey } } = envConfig;
    return `${apiendpoint}${searchTerm}&api_key=${apikey}&limit=1&rating=pg&weirdness=${wierdness}`;
}

export function getGiphyGif(searchTerm, wierdness) {
    const searchurl = getGiphyUrl(searchTerm, wierdness);
    return fetch(searchurl);
}