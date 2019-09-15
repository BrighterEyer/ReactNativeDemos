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

var screenW = Dimensions.get('window').width;
var screenH = Dimensions.get('window').height;

export default class AnimatedParallel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dogOpacityValue: new Animated.Value(1),
            dogACCValue: new Animated.Value(0)
        };

        this.parallelAnimated = Animated.sequence(
            [
                Animated.timing(
                    this.state.dogOpacityValue,
                    {
                        toValue: 1,
                        duration: 1000,
                    }
                ),
                Animated.timing(
                    this.state.dogACCValue,
                    {
                        toValue: 1,
                        duration: 2000,
                        easing: Easing.linear,
                    }
                ),
            ],
            {
                stopTogether: false
            }
        );
    }

    _startAnimated() {
        this.state.dogOpacityValue.setValue(0);
        this.state.dogACCValue.setValue(0);
        this.parallelAnimated.start();
    }

    render() {

        //透明度
        const dogOpacity = this.state.dogOpacityValue.interpolate({
            inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
            outputRange: [0, 1, 0, 1, 0, 1]
        });

        //眼镜左边
        const left = this.state.dogACCValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-120, 127]
        });

        //眼镜旋转
        const rotateZ = this.state.dogACCValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });

        //项链上面
        const neckTop = this.state.dogACCValue.interpolate({
            inputRange: [0, 1],
            outputRange: [350, 235]
        });

        return (
            <View style={styles.mainStyle}>

                {/*// 狗头*/}
                <Animated.View
                    style={{
                        width: 375,
                        height: 240,
                        opacity: dogOpacity,
                    }}>
                    <Image ref="image" style={{width: 375, height: 242}}
                           source={require('../../resource/dog.jpg')}>
                    </Image>
                </Animated.View>

                {/*// 项链*/}
                <Animated.View
                    style={{
                        width: 250,
                        height: 100,
                        position: 'absolute',
                        top: neckTop,
                        left: 93,
                    }}>
                    <Image ref="image" style={{width: 250, height: 100, resizeMode: 'stretch'}}
                           source={require('../../resource/necklace.jpg')}>
                    </Image>
                </Animated.View>

                <View
                    style={{
                        width: 375,
                        height: 200,
                        backgroundColor: 'white',
                    }}
                />

                {/*// 眼镜*/}
                <Animated.View
                    style={{
                        width: 120,
                        height: 25,
                        position: 'absolute',
                        top: 160,
                        left: left,
                        transform: [
                            {rotateZ: rotateZ}
                        ],
                    }}>
                    <Image ref="image" style={{width: 120, height: 25, resizeMode: 'stretch'}}
                           source={require('../../resource/glasses.png')}>
                    </Image>
                </Animated.View>

                <TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated.bind(this)}>
                    <Text style={{width: 200, height: 100, textAlign: 'center', lineHeight: 100}}>点击开始动画</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

var styles = StyleSheet.create({
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
