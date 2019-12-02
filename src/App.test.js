import React from 'react';
import App from './App';
import { reduxify, withRoutes } from "./utils/testUtil";
import { mount } from "enzyme";

it('renders without crashing', () => {
  const wrapper = mount(withRoutes(reduxify(<App />)));
  expect(wrapper.find("Header").length).toEqual(1);
});
