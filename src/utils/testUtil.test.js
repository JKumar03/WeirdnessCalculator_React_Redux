import React from "react";
import { reduxify, withRoutes } from "./testUtil";
import { shallow } from "enzyme";

describe('testUtil', () => {
    it('reduxify function should return component with Provider', () => {
        const MyApp = () => <h1>Test</h1>;
        const wrapper = shallow(reduxify(<MyApp />));
        expect(wrapper.find('ContextProvider').length).toEqual(1);
        expect(wrapper.find('MyApp').length).toEqual(1);
    })

    it('withRoutes function should return component with BrowserRouter warpped', () => {
        const MyApp = () => <h1>Test</h1>;
        const wrapper = shallow(withRoutes(<MyApp />));
        expect(wrapper.find('Router').length).toEqual(1);
        expect(wrapper.find('MyApp').length).toEqual(1);
    })
})