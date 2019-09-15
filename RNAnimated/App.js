/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Amin1 from "./src/LayoutAnim/Anim1";
import Amin2 from "./src/LayoutAnim/Anim2";
import AminLinearOpacity from "./src/LayoutAnim/AnimLinearOpacity";
import AminSpringEaseOut from "./src/LayoutAnim/AnimSpringEaseOut";
import Amin3 from "./src/LayoutAnim/Anim3";
import AnimatedDecay from "./src/Animated/AnimatedDecay";
import AnimatedParallel from "./src/Animated/AnimatedParallel";
import AnimatedSequence from "./src/Animated/AnimatedSequence";
import AnimatedSpring from "./src/Animated/AnimatedSpring";
import AnimatedStagger from "./src/Animated/AnimatedStagger";
import Mixture from "./src/Animated/Mixture";
import Opacity from "./src/Animated/Opacity";

export default class App extends Component<{}> {

    //LayoutAnim
    // render() {
    //     return (
    //         <View style={styles.container}>
    //             <Amin1></Amin1>
    //             <Amin2/>
    //             <Amin3/>
    //             <AminLinearOpacity/>
    //             <AminSpringEaseOut/>
    //         </View>
    //     );
    // }


    //Animated
    render() {
        return (
            <View style={styles.container}>
                {/*<AnimatedDecay/>*/}
                {/*<AnimatedParallel/>*/}
                {/*<AnimatedSequence/>*/}
                {/*<AnimatedSpring/>*/}
                {/*<AnimatedStagger/>*/}
                {/*<Opacity/>*/}
                <Mixture/>
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
});
