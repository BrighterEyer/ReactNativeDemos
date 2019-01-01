/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Alert
} from "react-native";
import PasswordGesture from 'react-native-gesture-password';

export default class MyGesturePassword extends Component{

    constructor(props) {
        super(props);
        this.state = {
            message: '请绘制解锁图案',
            status: 'normal',
            timeOut: 300,
        }
    }


    onEnd(password) {
        if (password == '123') {
            this.state = ({
                status: 'right',
                message: 'Password is right, success.'
            });
            // your codes to close this view
        } else {
            this.state = ({
                status: 'wrong',
                message: 'Password is wrong, try again.'
            });
        }
    }

    onStart() {
        this.state = ({
            status: 'normal',
            message: 'Please input your password.'
        });
    }

    onReset() {
        this.state = ({
            status: 'normal',
            message: 'Please input your password (again).'
        });
    }

    getInitialState() {
        return {
            message: 'Please input your password.',
            status: 'normal'
        }
    }

    render() {
        return (
            <PasswordGesture
                ref='pg'
                status={this.state.status}
                message={this.state.message}
                onStart={() => this.onStart()}
                onEnd={(password) => this.onEnd(password)}
                />
        );
    }
}
