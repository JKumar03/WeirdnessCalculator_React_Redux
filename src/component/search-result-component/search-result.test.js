import React from "react";
import { mount } from "enzyme";
import { SearchResult } from "./search-result";
import { reduxify, withRoutes } from "../../utils/testUtil";

const props = {
    searchTerm: "some text",
    resetSearchForm: jest.fn(),
    dispatch: jest.fn(),
    likedGifs: []
}

describe('search-result', () => {
    it('shoud render UsersLists component with InfoIcon and Fab when there is no user', () => {
        const wrapper = mount(reduxify(withRoutes(<SearchResult {...props} />)));
        expect(wrapper.find("WithStyles(ForwardRef(Card))").length).toEqual(1);

    })
})