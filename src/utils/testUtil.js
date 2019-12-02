import { Provider } from 'react-redux';
import { store } from './store';
import React from "react";
import { BrowserRouter } from "react-router-dom";

export function reduxify(component) {
    return (
        <Provider store={store}>
            {component}
        </Provider>
    )
}

export function withRoutes(component) {
    return (
        <BrowserRouter>
            {component}
        </BrowserRouter>
    )
}