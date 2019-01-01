import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Alert
} from 'react-native';

import CustomActionSheet from './app/CustomActionSheet'


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

    constructor(props) {
        super(props)
        this.onPressModalButton = this.onPressModalButton.bind(this)
    };

    onPressModalButton () {
        this.CustomActionSheet.onShowCustomActionSheet('hello',['取消', '确认需求,开始跟进'],0,-1,(index,str) => {
            console.log(index+str);
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <CustomActionSheet ref={o => this.CustomActionSheet = o} />
                <Button style={styles.modalbutton} title={"点击我弹框"} onPress={this.onPressModalButton}>default</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    modalbutton: {
        width: 200,
        height: 44,
        backgroundColor: '#333333',

    }
});