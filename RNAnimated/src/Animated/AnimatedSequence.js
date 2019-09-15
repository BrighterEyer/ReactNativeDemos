import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    Animated,//创建动画的库
    Easing,//React Native创建动画的载体
} from 'react-native';

let screenW = Dimensions.get('window').width;
let screenH = Dimensions.get('window').height;

export default class AnimatedSequence extends Component {

    constructor(props) {
        super(props);

        this.state = {
            turnRotateValue: new Animated.Value(0),
            turnShakeValue: new Animated.Value(0),
            macValue: new Animated.Value(0),
        };

        this.sequenceAnimated = Animated.sequence(
            [
                Animated.timing(
                    this.state.turnRotateValue,
                    {
                        toValue: 1,
                        duration: 5000,
                        easing: Easing.in,
                    }
                ),
                Animated.timing(
                    this.state.turnShakeValue,
                    {
                        toValue: 1,
                        duration: 500,
                        easing: Easing.in,
                        delay: 300,
                    }
                ),
                Animated.spring(
                    this.state.macValue,
                    {
                        toValue: 1,
                        friction: 3,
                        tension: 10,
                    }
                ),
            ]
        );
    }

    _startAnimated() {
        this.sequenceAnimated.start();
    }

    render() {

        //转盘旋转
        const turnRotateZ = this.state.turnRotateValue.interpolate({
            inputRange: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            outputRange: [
                '0deg',
                '180deg',
                '360deg',
                '720deg',
                '1080deg',
                '1800deg',
                '2520deg',
                '3060deg',
                '3420deg',
                '3600deg',
                '3690deg',
            ]
        });

        //转盘震动
        const marginLeft = this.state.turnShakeValue.interpolate({
            inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
            outputRange: [0, -40, 40, -40, 40, 0]
        });

        //MacTop
        const macTop = this.state.macValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-200, 150]
        });

        return (
            <View style={styles.mainStyle}>

                {/*// 转盘*/}
                <Animated.View
                    style={{
                        width: 300,
                        height: 300,
                        marginLeft: marginLeft,
                        transform: [
                            {rotateZ: turnRotateZ}
                        ],
                    }}>
                    <Image ref="image" style={{width: 300, height: 300}}
                           source={require('../../resource/dog.jpg')}>
                    </Image>
                </Animated.View>


                {/*// mac*/}
                <Animated.View
                    style={{
                        width: 300,
                        height: 204,
                        position: 'absolute',
                        top: macTop,
                        left: screenW / 2 - 150,
                    }}>
                    <Image ref="image" style={{width: 300, height: 204}}
                           source={require('../../resource/macpro.png')}>
                    </Image>
                </Animated.View>

                <TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated.bind(this)}>
                    <Text style={{width: 200, height: 100, textAlign: 'center', lineHeight: 100}}>点击开始动画</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
        width: screenW,
        backgroundColor: "#ffffff",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: 100,
    },
    touchStyle: {
        width: 200,
        height: 100,
        position: 'absolute',
        bottom: 0,
        left: screenW / 2 - 100,
    },
});
