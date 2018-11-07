import React, { Component } from 'react';
import {Provider} from "react-redux";
import Home from "../Home/homeContainer";
import {store} from "../store";

class HomeScreen extends Component {
    render() {
        return (
            <Provider store={store}>
                <Home />
            </Provider>
        );
    }
}

export default HomeScreen;