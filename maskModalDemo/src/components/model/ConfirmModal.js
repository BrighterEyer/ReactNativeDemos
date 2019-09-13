import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Dimensions} from 'react-native';

export default class ConfirmModal extends Component {

    _setModalVisible(visible) {
        this.props.callback(visible);
    }

    renderModalContent() {
        return (
            <View style={{height: 250, width: 300, margin: 20, backgroundColor: 'white'}}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: '#eee',
                    }}>
                    <Text>{this.props.content}</Text>
                </View>
                <TouchableHighlight
                    onPress={() => {
                        this._setModalVisible(!this.props.modalVisible);
                    }}
                    style={{height: 50, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>隐藏</Text>
                </TouchableHighlight>
            </View>
        );
    }

    render() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.modalVisible}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                <View
                    style={{
                        height: Dimensions.get('window').height,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                    }}>
                    {this.renderModalContent()}
                </View>
            </Modal>
        );
    }
}
