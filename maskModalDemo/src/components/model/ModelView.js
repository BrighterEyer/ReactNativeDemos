import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Dimensions} from 'react-native';

import ConfirmModal from './ConfirmModal';

export default class ModelView extends Component {
    state = {
        modalVisible: false,
        content: 'I come from Parent component',
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <View>
                <ConfirmModal
                    modalVisible={this.state.modalVisible}
                    content={this.state.content}
                    callback={this.setModalVisible.bind(this)}>
                </ConfirmModal>

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}
                >
                    <Text>Show Modal</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
