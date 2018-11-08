import React, { Component } from "react";
import { Container, Header, Content, SwipeRow, View, Text, Icon, Button, Thumbnail, List, ListItem, Left, Body, Right } from 'native-base';

interface Props {
    name: any,
    image: any
}

class MessageBox extends Component<Props, {} > {
    render() {
        return (
            <SwipeRow
                scrollEnabled={false}
                style={styles.MessageBox}
                leftOpenValue={75}
                rightOpenValue={-75}
                left={
                    <Button success onPress={() => alert('Add')}>
                        <Icon type="FontAwesome" name="phone" />
                    </Button>
                }
                body={
                    <View style={styles.View}>
                        <List>
                            <ListItem avatar>
                                <Left>
                                    <Thumbnail source={this.props.image} />
                                </Left>
                                <Body>
                                    <Text>{this.props.name}</Text>
                                    <Text style={styles.Text}>マッチングしました！</Text>
                                    <Text style={styles.Text}>通話してみましょう!</Text>
                                </Body>
                                <Right>
                                    <Text note>3:43 pm</Text>
                                </Right>
                            </ListItem>
                        </List>
                    </View>
                }
                right={
                    <Button danger onPress={() => alert('Trash')}>
                        <Icon active name="trash" />
                    </Button>
                }
            />
        );
    }
}

const styles: any = {
    MessageBox: {
        height: 100,
        borderColor: 'pink'
    },
    List: {
        borderWidth: 0
    },
    View: {
        width: '100%',
        borderWidth: 0
    },
    Text: {
        marginTop: 3,
        color: 'red'
    }

}

export default MessageBox;