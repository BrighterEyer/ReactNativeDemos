import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    LayoutAnimation,
} from 'react-native';

let screenW = Dimensions.get('window').width;
let screenH = Dimensions.get('window').height;


let anima = {
    duration: 1000,   //持续时间
    create: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity,
    },
    update: {
        type: LayoutAnimation.Types.linear,
    }
};

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: 200,
            height: 100,
            left: 100,
            top: 20,
        }
    }

    _clickStartAnimation() {

        LayoutAnimation.configureNext(anima, () => {
            this.setState({
                top: 20,
            });
        });
        this.setState({
            top: this.state.top + 200,
        });
    }

    _setTimer() {
        // 创建定时器
        this._clickStartAnimation();
        this.timer = setInterval(this._clickStartAnimation.bind(this), 1200);
    }

    render() {
        return (
            <View style={styles.mainStyle}>

                {/*<Image*/}
                {/*    style={{*/}
                {/*        width: this.state.width,*/}
                {/*        height: this.state.height,*/}
                {/*        position: 'absolute',*/}
                {/*        left: this.state.left,*/}
                {/*        top: this.state.top*/}
                {/*    }}*/}
                {/*    source={require('../../resource/100元.jpg')}>*/}
                {/*</Image>*/}

                <View
                    style={{
                        width: this.state.width,
                        height: this.state.height,
                        position: 'absolute',
                        left: this.state.left,
                        top: this.state.top
                    }}>
                    <Text style={{
                        color: '#FFD700',
                        fontSize: 90,
                        lineHeight: 104,
                        width: 240,
                        textAlign: 'center'
                    }}>红包</Text>
                </View>

                <TouchableOpacity style={{width: 200, height: 50, backgroundColor: 'yellow', marginTop: 40}}
                                  onPress={this._setTimer.bind(this)}>
                    <Text style={{width: 200, height: 50, textAlign: 'center', lineHeight: 50}}>点击开始动画</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
        width: screenW,
        backgroundColor: "#1ab9af",
        justifyContent: 'center',
        alignItems: 'center',
    },
});
