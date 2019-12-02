import { gifConstants } from "../utils/constants";
import { addLikedGifToList } from "./gif-action";

describe("gif-action", () => {
    it('should return proper action', () => {
        const payload = { name: 'abc' }
        const expectedAction = {
            type: gifConstants.LIKE_GIF,
            payload
        };
        expect(addLikedGifToList(payload)).toEqual(expectedAction);
    })
})