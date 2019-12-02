import React from "react";
import { Header } from "./header";
import { shallow } from "enzyme";

describe('app-view', () => {
    it('shoud render Header', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find("WithStyles(ForwardRef(AppBar))").length).toEqual(1);
    })
})