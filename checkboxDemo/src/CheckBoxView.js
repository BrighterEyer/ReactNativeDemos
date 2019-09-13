import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import CheckBox from 'react-native-check-box';


export default class checkBoxView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOneChecked: false,
            isTwoChecked: false,
            isThreeChecked: false,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <CheckBox
                    style={styles.checkBox}
                    onClick={() => {
                        this.setState({
                            isOneChecked: !this.state.isOneChecked,
                        });
                    }}
                    isChecked={this.state.isOneChecked}
                    rightText={'Java'}
                    rightTextStyle={styles.text}
                    checkedImage={<Image source={require('./img/ic_check_box_outline_blank.png')}
                                         style={styles.image}/>}
                    unCheckedImage={<Image source={require('./img/ic_check_box.png')} style={styles.image}/>}
                />

                <CheckBox
                    style={styles.checkBox}
                    onClick={() => {
                        this.setState({
                            isTwoChecked: !this.state.isTwoChecked,
                        });
                    }}
                    isChecked={this.state.isTwoChecked}
                    rightText={'Android'}
                    rightTextStyle={styles.text}
                    checkedImage={<Image source={require('./img/ic_check_box_outline_blank.png')}
                                         style={styles.image}/>}
                    unCheckedImage={<Image source={require('./img/ic_check_box.png')} style={styles.image}/>}
                />

                <CheckBox
                    style={styles.checkBox}
                    onClick={() => {
                        this.setState({
                            isThreeChecked: !this.state.isThreeChecked,
                        });
                    }}
                    isChecked={this.state.isThreeChecked}
                    rightText={'other'}
                    rightTextStyle={styles.text}
                    checkedImage={<Image source={require('./img/ic_check_box_outline_blank.png')}
                                         style={styles.image}/>}
                    unCheckedImage={<Image source={require('./img/ic_check_box.png')} style={styles.image}/>}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f5f6f8',
    },

    checkBox: {
        backgroundColor: 'white',
        height: 56,
        marginTop: 1,
        justifyContent: 'center',
    },
    image: {
        marginLeft: 16,
        width: 24,
        height: 24,
    },

    text: {
        fontSize: 18,
        color: '#424242',
    },
});
