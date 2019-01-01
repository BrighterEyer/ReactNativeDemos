import React, { Component,PropTypes } from 'react';
import {
    requireNativeComponent
} from 'react-native';
var RNTMap = requireNativeComponent('RNTMap', MapView);

export default class MapView extends Component {
    render() {
        return <RNTMap {...this.props} />;
    }

}