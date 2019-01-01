import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class MyWeb extends Component {
  render() {
    return (
      <WebView
        originWhitelist={['*']}
        source={{ html: '<h1>Hello world</h1>' }}
      />

    );
  }
}