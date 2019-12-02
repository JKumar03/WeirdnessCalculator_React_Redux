import { gifConstants } from "../utils/constants";

export function addLikedGifToList(payload) {
    return {
        type: gifConstants.LIKE_GIF,
        payload
    }
}

export function removeLikedGifFromList(payload) {
    return {
        type: gifConstants.DISLIKE_GIF,
        payload
    }
}

export function restart(){
    return {
        type: gifConstants.RESTART
    }
}