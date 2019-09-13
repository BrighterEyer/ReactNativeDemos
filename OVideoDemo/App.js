/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';


import VideoPlayer from './src/VideoPlayer';

const App = () => {
    return (
        <VideoPlayer/>
    );
};

const styles = StyleSheet.create({});

export default App;
