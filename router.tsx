import React, { Component } from 'react';
import { Scene, Router, Tabs } from 'react-native-router-flux';
import Home from './screens/home';
import Daily from './screens/daily';
import Heart from './screens/heart';
import Match from './screens/match';
import Search from './screens/search';
import Profile from './screens/profile';
import {Icon,View} from 'native-base';

const RouterComponent = () => {
    return (
        <Router>
            <Tabs
                key='root'
                swipeEnabled={ true }
            >
                <Scene key="検索" component={Search}
                       iconName='search'
                       iconColor='pink'
                       icon={TabBarIcon}
                />
                <Scene key="通話" component={Match}
                       iconName='phone'
                       iconColor='pink'
                       icon={TabBarIcon}
                />
                <Scene key="毎日" component={Daily}
                       iconName='gift'
                       iconColor='pink'
                       icon={TabBarIcon}
                />
                <Scene key="相手から" component={Heart}
                       iconName='heart'
                       iconColor='pink'
                       icon={TabBarIcon}
                />
                <Scene key="プロフ" component={Profile}
                       iconName='user'
                       iconColor='pink'
                       icon={TabBarIcon}
                />
            </Tabs>
        </Router>
    )
}

const TabBarIcon = (props: any) => (
    <View style={styles.tabIconContainerStyle}>
        <Icon
            name={props.iconName}
            type="FontAwesome"
            color={props.focused ? 'pink' : 'grey'}
            style={styles.tabIconStyle}
        />
    </View>
);

const styles: any = {
    tabIconContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabIconStyle: {
        width: 24,
        height: 24,
        fontSize: 24,
        color: 'pink'
    }
}

export default RouterComponent;