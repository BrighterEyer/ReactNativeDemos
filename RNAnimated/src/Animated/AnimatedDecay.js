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

export default class AnimatedDecay extends Component {

    constructor(props) {
        super(props);

        this.state = {
            decayValue: new Animated.ValueXY({x: 0, y: 0}),
        };

        this.decayAnimated = Animated.decay(
            this.state.decayValue,
            {
                velocity: 5,       // 起始速度，必填
                deceleration: 0.95,  // 速度衰减比例，默认为0.997
            }
        );
    }

    _startAnimated() {
        this.decayAnimated.start();
    }

    render() {
        return (
            <View style={styles.mainStyle}>

                <Animated.View
                    style={{
                        width: 100,
                        height: 150,
                        transform: [
                            {translateX: this.state.decayValue.x}, // x轴移动
                            {translateY: this.state.decayValue.y}, // y轴移动
                        ]
                    }}>
                    <Image ref="image" style={{width: 100, height: 150}}
                           source={require('../../resource/dog.jpg')}>
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
