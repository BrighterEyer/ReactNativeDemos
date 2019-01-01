import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    TextInput,
    View,
    Text,
    Clipboard
} from 'react-native';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { textFromClipboard: '' };
    }

    //从剪贴板中读取字符串
    pasteFromClipboard() {
        Clipboard.getString().then(
            (textFromClipboard) => {
                this.setState({ textFromClipboard });
            }
        ).catch(
            (error) => {
                console.log("从剪贴板中读取数据错误!");
                console.log(error);
            }
        );
    }

    //向剪贴板中存入字符串
    copyToClipBoard() {
        Clipboard.setString('欢迎访问 hangge.com');
    }

    render() {
     return (
      <View style={styles.container}>
        <View style={styles.flexDirection}>
          <Text style={styles.buttonStyle} onPress={this.copyToClipBoard.bind(this)}>
            存入剪贴板
          </Text>
          <Text style={styles.buttonStyle} onPress={this.pasteFromClipboard.bind(this)}>
            读取剪贴板
          </Text>
        </View>
        <Text style={styles.info}>
          {this.state.textFromClipboard}
        </Text>
      </View>
     );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        alignItems: 'center',
    },
    flexDirection: {
        flexDirection: 'row'
    },
    buttonStyle: {
        textAlign: 'center',
        color: 'white',
        margin: 10,
        backgroundColor: '#4CA300',
        width: 140,
        fontSize: 23
    },
    info: {
        fontSize: 20,
        margin: 10
    },
});