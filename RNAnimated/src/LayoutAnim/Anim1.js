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
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        // LayoutAnimation.configureNext(anima,()=>{});
        this.setState({
            show: true,
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

                <Image
                    style={{
                        width: this.state.width,
                        height: this.state.height,
                        position: 'absolute',
                        left: this.state.left,
                        top: this.state.top
                    }}
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
