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

export default class Opacity extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fadeOutOpacity: new Animated.Value(1),
        };


        this.fadeOutAnimated = Animated.timing(
            this.state.fadeOutOpacity,
            {
                toValue: 0,  //透明度动画最终值
                duration: 3000,   //动画时长3000毫秒
                easing: Easing.linear,
            }
        );
    }

    _startAnimated() {
        this.fadeOutAnimated.start(() => this.state.fadeOutOpacity.setValue(1));
    }

    render() {
        return (
            <View style={styles.mainStyle}>

                <Animated.View style={{width: 200, height: 300, opacity: this.state.fadeOutOpacity}}>
                    <Image ref="image" style={{width: 200, height: 300}}
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
