import { gifConstants } from "../utils/constants";

const initalState = {
    likedGifs: []
}

export function gifReducer(state = initalState, action) {
    const { type, payload } = action;
    const constants = Object.values(gifConstants);
    if (!constants.includes(type)) {
        return state;
    } else {
        const finalState = {
            [gifConstants.LIKE_GIF]: { likedGifs: [payload, ...state.likedGifs] },
            [gifConstants.DISLIKE_GIF]: { likedGifs: state.likedGifs.filter(gif => gif.searchTerm !== payload) },
            [gifConstants.RESTART]: { likedGifs: [] },
        }[type];
        return finalState;
    }
}