import { wierdenssError, wierdnessSucess } from "./wierdness-action";
import { wierdnessConstants } from "../utils/constants";

describe('wierdness-action', () => {
    it('wierdenssError should-return proper action', () => {
        expect(wierdenssError()).toEqual({
            type: wierdnessConstants.WIERDNESS_ERROR
        })
    })

    it('wierdnessSucess should return proper paylaod action', () => {
        expect(wierdnessSucess("data")).toEqual({
            type: wierdnessConstants.WIERDNESS_SUCCESS,
            payload: "data"
        })
    })
})