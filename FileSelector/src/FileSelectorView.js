import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RNFileSelector from 'react-native-file-selector';


export default class FileSelectorView extends Component {


    _showFileExplore() {
        RNFileSelector.Show(
            {
                title: '选择文件',
                onDone: (path) => {
                    console.log('文件路径: ' + path);
                },
                onCancel: () => {
                    console.log('取消');
                },
            },
        );
    }

    render(): * {
        return (
            <View style={styles.container}>
                <Text
                    style={styles.openExplore}
                    onPress={() => {
                        this._showFileExplore();
                    }}>打开文件浏览器</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    openExplore:{

    }
});
