/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment,Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Alert,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Stepper from './src/Stepper/Stepper';
import Button from './src/Stepper/Button';

type Props = {}

class RootView extends Component<Props> {

    //构造函数
    constructor(props) {
        super(props);
    }

    //渲染
    render() {
        return (
            <View style={[styles.container]}>
                <Stepper
                    onChange={(val) => {
                        console.log(val + '');
                    }}
                    defaultValue={1}
                    min={1}
                    max={100}
                    step={1}/>
            </View>
        );
    }
}

const App = () => {
    return (
        <RootView/>
    );
};

const styles = StyleSheet.create({});

export default App;
