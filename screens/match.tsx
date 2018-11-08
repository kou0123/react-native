import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Icon } from 'native-base';

class Match extends Component {
    public render(): any {
        return (
            <Container>
                <Header />
                <Content>
                    <Icon type="FontAwesome" style={styles.heart} name='heartbeat' />
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    heart: {
        color: 'red'
    },
});

export default Match;