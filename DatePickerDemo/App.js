/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import DatePicker from 'react-native-datepicker';

type Props = {};
export default class App extends Component < Props > {

    state = { time: null , datetime: null };

    constructor() {
        super();
        this.setState({ time: new Date() , datetime: new Date()});
    }


    render() {
        return (
            <View>
               <Text style={styles.instructions}>time: {this.state.time}</Text>
                 <DatePicker
                   style={{width: 200}}
                   date={this.state.time}
                   mode="time"
                   format="HH:mm:ss"
                   confirmBtnText="确定"
                   cancelBtnText="取消"
                   showIcon={false}
                   onDateChange={(datetime) => {this.setState({time: time});}}
                 />
                 <Text style={styles.instructions}>datetime: {this.state.datetime}</Text>
                 <DatePicker
                   style={{width: 200}}
                   date={this.state.datetime}
                   mode="datetime"
                   format="YYYY-MM-DD HH:mm"
                   confirmBtnText="确定"
                   cancelBtnText="取消"
                   customStyles={{
                     dateIcon: {
                       position: 'absolute',
                       left: 0,
                       top: 4,
                       marginLeft: 0
                     },
                     dateInput: {
                       marginLeft: 36
                     }
                   }}
                   minuteInterval={10}
                   onDateChange={(datetime) => {this.setState({datetime: datetime});}}
                 />
              <Text style={styles.instructions}>datetime: {this.state.datetime1}</Text>
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
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});