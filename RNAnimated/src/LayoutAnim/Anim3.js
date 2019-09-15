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

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: 250,
            height: 125,
            show: false,
        }
    }

    _clickStartAnimation() {
        LayoutAnimation.configureNext({
            duration: 1000,   //持续时间
            create: {
                type: LayoutAnimation.Types.spring,
                property: LayoutAnimation.Properties.scaleXY,
            },
            update: {
                type: 'spring',
                springDamping: 0.4,
            }
        });
        this.setState({
            width: this.state.width + 40,
            height: this.state.height + 60,
            left: this.state.left + 20,
            top: this.state.top + 50,
        });
    }

    render() {

        let secondMoney = this.state.show ? (
            <Image style={{width: this.state.width, height: this.state.height}}
                   source={require('../../resource/100元.jpg')}>
            </Image>
        ) : null;

        return (
            <View style={styles.mainStyle}>

                <Image style={{width: this.state.width, height: this.state.height}}
                       source={require('../../resource/100元.jpg')}>
                </Image>

                {secondMoney}

                <TouchableOpacity style={{width: 200, height: 50, backgroundColor: 'yellow', marginTop: 40}}
                                  onPress={this._clickStartAnimation.bind(this)}>
                    <Text style={{width: 200, height: 50, textAlign: 'center', lineHeight: 50}}>魔法现金</Text>
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
