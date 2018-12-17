/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Scroll from './Scroll';
import ListMovie from './ListMovie';

export default class App extends Component {
  render() {
    return (
      <View>
        <ListMovie/>
      </View>
    );
  }
}
