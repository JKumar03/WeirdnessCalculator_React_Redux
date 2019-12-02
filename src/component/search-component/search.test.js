import React from "react";
import { mount } from "enzyme";
import { Search } from "./search";
import { reduxify, withRoutes } from "../../utils/testUtil";

const props = {
    history: {
        push: jest.fn()
    }
}

describe('Search', () => {
    it('shoud render Search component with SearchResult', () => {
        const wrapper = mount(reduxify(withRoutes(<Search {...props} />)));
        expect(wrapper.find("SearchResult").length).toEqual(0);
    })
})