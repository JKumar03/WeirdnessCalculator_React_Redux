import { wierdnessConstants } from "../utils/constants";

const initialState = {
    gif: null,
    isLoading: false,
    isErrror: false
}

export function wierdnessReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case wierdnessConstants.FETCH_WIERDNESS:
            return {
                ...state,
                isErrror: false,
                isLoading: true,
                gif: null
            }
        case wierdnessConstants.WIERDNESS_ERROR:
            return {
                ...state,
                isErrror: true,
                isLoading: false,
                gif: null
            }
        case wierdnessConstants.WIERDNESS_SUCCESS:
            return {
                ...state,
                isErrror: false,
                isLoading: false,
                gif: payload
            }
        default:
            return state;
    }
}