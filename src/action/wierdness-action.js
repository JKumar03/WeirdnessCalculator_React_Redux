import { wierdnessConstants } from "../utils/constants";
import { getGiphyGif } from "../utils/utility";

export function fetchWierdness(searchTerm, wierdness) {
    return function (dispatch) {
        dispatch({ type: wierdnessConstants.FETCH_WIERDNESS });
        getGiphyGif(searchTerm, wierdness)
            .then(response => response.json())
            .then(wierdnessResult => {
                const { data, meta: { response_id: searchId } } = wierdnessResult;
                if (!data) {
                    dispatch(wierdnessSucess(null))
                } else {
                    const { title, id, import_datetime, images: { downsized_medium: { url } } } = data;
                    dispatch(wierdnessSucess({ title, url, id, searchId, import_datetime }))
                }
            }).catch(_ => {
                dispatch(wierdenssError())
            })

    }
}


export function wierdenssError() {
    return {
        type: wierdnessConstants.WIERDNESS_ERROR
    }
}

export function wierdnessSucess(payload) {
    return {
        type: wierdnessConstants.WIERDNESS_SUCCESS,
        payload
    }
}