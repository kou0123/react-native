import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Icon } from 'native-base';
import MessageBox from '../Home/components/message'

const cards = [
    {
        name: 'あさみ',
        image: require('../Home/components/img/test.jpg')
    },
    {
        name: 'えみ',
        image: require('../Home/components/img/test2.jpg')
    },
    {
        name: '真波',
        image: require('../Home/components/img/test3.jpg')
    }
];

class Match extends Component {
    public render(): any {
        const messageBoxies: any[] = [];
        for(let c of cards) {
            messageBoxies.push(
                <MessageBox
                    name={c.name}
                    image={c.image}
                />
            )
        }
        return (
            <Container>
                {messageBoxies}
            </Container>
        );
    }
}

export default Match;