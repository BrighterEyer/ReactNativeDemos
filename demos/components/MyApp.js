import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigatorIOS, Text, TouchableHighlight, View, AppRegistry, StyleSheet, AlertIOS } from 'react-native';

class MyView extends Component {

    _handleBackPress() {
        this.props.navigator.pop();
    }

    _handleNextPress(nextRoute) {
        this.props.navigator.push(nextRoute);
    }

    render() {
        const nextRoute = {
            component: MyScene,
            title: 'Bar That',
            passProps: { myProp: 'bar' }
        };
        return ( 
        	<View this._handleNextPress(nextRoute) >
                 <Text>See you on the other nav { this.props.myProp } !</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    content: {
        paddingTop: 100
    }
})

export default class MyApp extends Component {

    _handleNextButtonPress() {
        // AlertIOS.alert("Be A Lert");右键点击的事件，
        this.refs.nav.push({
            component: MyScene,
            title: 'Login'
        });
    }

    render() {
        return ( <
            MyView style = { { flex: 1 } } this._handleNextButtonPress() / >
        )
    }
}

class MyScene extends Component {

    _onForward = () => {
        this.props.navigator.push({
            title: 'Scene',
        });
    }
    render() {
        return (
            Current Scene: { this.props.title } Tap me to load the next scene Tap me to load the next scene Tap me to load the next scene Tap me to load the next scene
        )
    }
}

AppRegistry.registerComponent('MyApp', () => MyApp);