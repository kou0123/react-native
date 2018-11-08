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
                <Scene key="ホーム" component={Home}
                       iconName='home'
                       iconColor='red'
                       icon={TabBarIcon}
                />
                <Scene key="検索" component={Search}
                       iconName='search'
                       iconColor='red'
                       icon={TabBarIcon}
                />
                <Scene key="メッセージ" component={Match}
                       iconName='comments-o'
                       iconColor='red'
                       icon={TabBarIcon}
                />
                <Scene key="毎日" component={Daily}
                       iconName='gift'
                       iconColor='red'
                       icon={TabBarIcon}
                />
                <Scene key="相手から" component={Heart}
                       iconName='heart'
                       iconColor='red'
                       icon={TabBarIcon}
                />
                <Scene key="プロフ" component={Profile}
                       iconName='user'
                       iconColor='red'
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
            color={props.focused ? 'blue' : 'grey'}
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
    },
}

export default RouterComponent;