import React, { Component } from 'react';
import {Provider} from "react-redux";
import Home from "../Home/homeContainer";
import {store} from "../store";
import {DeckSwiper} from "native-base";

class HomeScreen extends Component {
    render() {
        return (
            <DeckSwiper/>
        );
    }
}

export default HomeScreen;