/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Bananas from './components/Bananas';
import Greetings from './components/LotsOfGreetings';
import BlinkApp from './components/BlinkApp';
import LotsOfStyles from './components/LotsOfStyles';
import FixedDimensionsBasics from './components/FixedDimensionsBasics';
import JustifyContentBasics from './components/JustifyContentBasics';
import AlignItemsBasics from './components/AlignItemsBasics';
import PizzaTranslator from './components/PizzaTranslator';
import ButtonBasics from './components/ButtonBasics';
import Touchables from './components/Touchables';
import IScrolledDownAndWhatHappenedNextShockedMe from './components/IScrolledDownAndWhatHappenedNextShockedMe';
import FlatListBasics from './components/FlatListBasics';
import SectionListBasics from './components/SectionListBasics';
import FetchExample from './components/FetchExample';
import SampleAppMovies from './components/SampleAppMovies';
import MyWeb from './components/MyWeb';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component < Props > {
    render() {
        return (
            <View style={styles.container}>
              {/*
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                <Bananas/>
                <Greetings/>
                <BlinkApp/>
                <LotsOfStyles/>
              <FixedDimensionsBasics/>
              <JustifyContentBasics/>
              <AlignItemsBasics/>
              <PizzaTranslator/>
              <ButtonBasics/>
              <Touchables/>
              <IScrolledDownAndWhatHappenedNextShockedMe/>
              <FlatListBasics/>
              <SectionListBasics/>
              <FetchExample/>
              <SampleAppMovies/>
              <MyWeb/>
              */}
              <SampleAppMovies/>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#F5FCFF',
        width:'100%',
        height:'100%',
    },
    // welcome: {
    //     fontSize: 20,
    //     textAlign: 'center',
    //     margin: 10,
    // },
    // instructions: {
    //     textAlign: 'center',
    //     color: '#333333',
    //     marginBottom: 5,
    // },
});