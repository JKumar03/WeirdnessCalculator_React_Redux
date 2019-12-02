import { wierdnessReducer } from "./wierdness-reducer";
import { wierdnessConstants } from "../utils/constants";

describe('wierdness-reducer', () => {
    it('should check state when FETCH_WIERDNESS', () => {
        expect(wierdnessReducer(undefined, { type: wierdnessConstants.FETCH_WIERDNESS, payload: '122' })).toEqual({
            gif: null,
            isLoading: true,
            isErrror: false
        })
    });

    it('should check state when WIERDNESS_ERROR', () => {
        expect(wierdnessReducer(undefined, { type: wierdnessConstants.WIERDNESS_ERROR, payload: '122' })).toEqual({
            gif: null,
            isLoading: false,
            isErrror: true
        })
    });

    it('should check state when WIERDNESS_SUCCESS', () => {
        expect(wierdnessReducer(undefined, { type: wierdnessConstants.WIERDNESS_SUCCESS, payload: {} })).toEqual({
            gif: {},
            isLoading: false,
            isErrror: false
        })
    })
})