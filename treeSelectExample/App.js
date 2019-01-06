/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TreeSelect from './components/treeSelect/index';
import treeselectData from './treselect.json';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: null
        };
    };

    _onClick = ({ item, routes }) => {
        console.log(item.name);
        console.log(routes);
        this.setState({
            result: item.name
        });
    };

    _onClickLeaf = ({ item, routes }) => {
        console.log(item.name);
        console.log(routes);
    };

    render() {
        return (
            <View style={styles.container}>
        <View style={{ marginVertical: 30 }}><Text>{this.state.result}</Text></View>
        <View style={{ width: '100%',  flex: 1 }}>
          <TreeSelect
            data={treeselectData}
            isOpen
            openIds={['A01']}
            isShowTreeId={false}
            itemStyle={{
              // backgroudColor: '#8bb0ee',
              fontSize: 12,
              color: '#995962'
            }}
            selectedItemStyle={{
              backgroudColor: '#f7edca',
              fontSize: 16,
              color: '#171e99'
            }}
            onClick={this._onClick}
            onClickLeaf={this._onClickLeaf}
          />
        </View>
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