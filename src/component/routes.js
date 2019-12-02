import React from "react";
import { Switch, Route } from "react-router-dom";
import FinalResult from "./wirdness-final-result";
import Home from "./app-view/Home"

export default function AppRoutes() {
    return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/result" component={FinalResult} />
            </Switch>

    )
}