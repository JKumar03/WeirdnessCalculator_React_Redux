import React from "react";
import { mount } from "enzyme";
import { LikedGifs } from "./liked-gifs";
import { reduxify, withRoutes } from "../../utils/testUtil";
import * as reactRedux from "react-redux";

const props = {
    history: {
        push: jest.fn()
    }
}

describe('liked-gifs', () => {
    it('shoud render LikedGifs component with LikedCard', () => {
        reactRedux.useSelector = jest.fn().mockImplementation(() => [{ searchTerm: 'rahul', searchId: '1234', url: '',title:'',wierdness:0,import_datetime:'' }]);
        const wrapper = mount(withRoutes(reduxify(<LikedGifs {...props} />)));
        expect(wrapper.find("LikedCard").length).toEqual(1);
    })
})