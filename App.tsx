import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Home from "./Home/homeContainer";

const App = () => (
    <Provider store={store}>
        <Home />
    </Provider>
);

export default App;
