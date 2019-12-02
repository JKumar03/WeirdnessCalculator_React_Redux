import React from "react";
import { mount } from "enzyme";
import { FinalResult } from "./final-result";
import { withRoutes, reduxify } from "../../utils/testUtil";
import * as reactRedux from "react-redux";

const props = {
    history: {
        push: jest.fn()
    }
}

describe('add-users', () => {
    it('shoud render final-reuslt component with LikedCard component', () => {
        reactRedux.useSelector = jest.fn().mockImplementation(() => [{ searchTerm: 'rahul', searchId: '1234', id: '', title: '', wierdness: 0, url: '', import_datetime: '' }]);
        const wrapper = mount(withRoutes(reduxify(<FinalResult {...props} />)));
        expect(wrapper.find("LikedCard").length).toEqual(1);
    })
})