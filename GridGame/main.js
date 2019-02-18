
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

// 网格页
var BoardView = require('./boardview.js');

// 主页
class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
          <BoardView/>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#644B62'
  }
});

module.exports = Main;
