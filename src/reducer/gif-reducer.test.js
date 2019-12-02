import { gifConstants } from "../utils/constants";
import { gifReducer } from "./gif-reducer";

describe('gif-reducer', () => {
    it('gifReducer should add data to  state when LIKE_GIF action is passed', () => {
        const action = {
            type: gifConstants.LIKE_GIF,
            payload: { name: "test2" }
        };
        const state = { likedGifs: [{ name: 'test1' }] }
        expect(gifReducer(state, action)).toEqual({
            likedGifs: [{ name: "test2" }, { name: 'test1' }]
        })

    });

    it('gifReducer should return the default state when invalid action is passed', () => {
        const action = {
            type: 'INVALID',
            payload: { name: "test2" }
        };
        const state = { likedGifs: [{ name: 'test1' }] };
        expect(gifReducer(state, action)).toEqual({
            likedGifs: [{ name: 'test1' }]
        })

    })

    it('gifReducer should clear data from   state when RESTART action is passed', () => {
        const action = {
            type: gifConstants.RESTART
        };
        const state = { likedGifs: [{ searchId: '1', name: 'test1' }, { searchId: '2', name: 'test1' }] };
        expect(gifReducer(state, action)).toEqual({
            likedGifs: []
        })
    })
})