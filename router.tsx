import React, { Component } from 'react';
import { Scene, Router, Tabs } from 'react-native-router-flux';
import Home from './screens/home';
import Profile from './screens/profile';

const RouterComponent = () => {
    return (
        <Router>
            <Tabs
                key='root'
                swipeEnabled={ true }
            >
                <Scene key="home" component={Home}/>
                <Scene key="profile" component={Profile}/>
            </Tabs>
        </Router>
    )
}

export default RouterComponent;