import React, {Component} from "react";
import ActionSheet from 'react-native-actionsheet'
import {
    Alert,
    DeviceEventEmitter,
    ActionSheetIOS
} from 'react-native'


class CustomActionSheet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectIndex: 0,
            warmingTitle: '提示',
            optionLists: ['取消', '确认需求,开始跟进', '暂无需求', '目前使用竞品产品', '联系不上'],
            cancel_index: 0,
            destruc_index: -1,
        };
        this.onShowCustomActionSheet = this.onShowCustomActionSheet.bind(this)
        this.onPressIndex = this.onPressIndex.bind(this);
    }

    clickedCallBack() {

    }

    onShowCustomActionSheet(warmingTitle: Object, options: Object, cancelButtonIndex: Object,
                            destructiveButtonIndex: Object, callback: Function) {

        console.log('warmingTitle:' + warmingTitle + '\toptions:' + options + '\tcancelButtonIndex:' + cancelButtonIndex + '\tdestructiveButtonIndex:' + destructiveButtonIndex);
        this.ActionSheet.show();

        if (options != undefined && Object.prototype.toString.call(options) == '[object Array]' && options.length != 0) {
            this.setState = ({
                    optionLists: options
                }, () => this.ActionSheet.show()
            )
        }
        if (warmingTitle != undefined) {
            this.setState = ({
                    warmingTitle: warmingTitle
                }, () => this.ActionSheet.show()
            )
        }

        if (destructiveButtonIndex != undefined) {
            this.setState = ({
                    destruc_index: destructiveButtonIndex
                }, () => this.ActionSheet.show()
            )
        }

        if (cancelButtonIndex != undefined) {
            this.setState = (
                {cancel_index: cancelButtonIndex}, 
                () => this.ActionSheet.show()
            )
        }
        this.clickedCallBack = callback;
    }

    onPressIndex(index) {
        this.setState = {
            selectIndex: index
        }

        this.clickedCallBack(index, this.state.optionLists[index])
    }

    render() {
        return (
            <ActionSheet ref={o => this.ActionSheet = o} onPress={this.onPressIndex} title={this.state.warmingTitle}
                         options={this.state.optionLists} cancelButtonIndex={this.state.cancel_index}
                         destructiveButtonIndex={this.state.destruc_index}></ActionSheet>
        );
    }
}

export default CustomActionSheet;