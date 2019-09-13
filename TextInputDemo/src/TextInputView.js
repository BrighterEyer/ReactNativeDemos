'use strict';

import React, {Component} from 'react';

import {
    Text,
    TextInput,
    View,
    StyleSheet,
    AppRegistry,
    Alert,
} from 'react-native';


type Props = {}

export default class TextInputView extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {text: 'url Placeholder'};
    }

    _onChangeText(text) {
        console.log('_onChangeText called and text is', text);
    }

    _onChange(text) {
        console.log('_onChange called and text is', text);
    }

    _onEndEditing(text) {
        console.log('_onEndEditing called and text is', text);
    }

    _onFocus() {
        //点击某一个item,获得焦点就会调用这个方法
        console.log('_onFocus called');
    }

    _onSelectionChange(range) {
        //当在item中选择的位置发生变化时就会调用这个方法,比如第一次选择第二个字符的位置,第二次更改为点击第一个字符位置
        var rangeText = range;
        console.log('_onSelectionChange called and range is', rangeText);
    }

    _onSubmitEditing(text) {
        console.log('_onSubmitEditing called and text is', text);
    }

    render() {
        return (
            <View>
                <TextInput
                    ref='URLTEXTINPUT'
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    placeholder='URL'
                    onChangeText={(text) => this._onChangeText(text)}
                    onChange={(event) => this._onChange('onChange text: ' + event.nativeEvent.text)}
                    //onEndEditing 在文本输入结束后会调用,时机为在某个框体内输入文字后选择键盘上的完成键或者输入文字后将焦点手动点换到其它item上,或者输入文字后选择return按钮来切换都会调用
                    onEndEditing={(event) => this._onEndEditing('onEndEditing text: ' + event.nativeEvent.text)}
                    //如果属性设置了clearTextOnFocus为true,意思是第二次回到同一个itme的时候自动清空里面的内容,    那么onChangeText就不会被重新调用,那么保存的还是上一次的值。当判断值不为空的情况下就会出错。
                    //这种情况下就需要判断onSelectionChange中的range是否为0来判断了
                    clearTextOnFocus={true}
                    onFocus={(event) => this._onFocus}
                    returnKeyType='next'
                    onSelectionChange={(event) => this._onSelectionChange(event.nativeEvent.selection.start + event.nativeEvent.selection.end)}
                    //此回调函数当软键盘的确定/提交按钮被按下的时候调用此函数。如果multiline={true}，此属性不可用。还有就是输入文字后选择enter键也会调用此函数,和onEndEditing唯一不同的是,它在输入框
                    // 焦点切换成另外一个输入框焦点时候不会被调用
                    //所以如果想实现类似选择next按钮后将焦点自动切换到下一个item项的功能就可以在这个回调函数中实现
                    onSubmitEditing={(event) => this.refs.USERNAMETEXTINPUT.focus()}
                />

                <TextInput
                    ref='USERNAMETEXTINPUT'
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    placeholder='Username'
                    //当文本框内容变化的时候调用此回调函数,改变后的文字内容会作为参数来传递, onChange一样的情况调用,唯一不同的是参数不支持直接的text字符串来传递而已
                    onChangeText={(text) => this._onChangeText(text)}
                    onChange={(event) => this._onChange('onChange text: ' + event.nativeEvent.text)}
                    onEndEditing={(event) => this._onEndEditing('onEndEditing text: ' + event.nativeEvent.text)}
                    //如果属性设置了clearTextOnFocus为true,意思是第二次回到同一个itme的时候自动清空里面的内容,那么onChangeText就不会被重新调用,那么保存的还是上一次的值。当判断值不为空的情况下就会出错。
                    //这种情况下就需要判断onSelectionChange中的range是否为0来判断了
                    clearTextOnFocus={true}
                    onFocus={(event) => this._onFocus}
                    returnKeyType='next'
                    //onSelectionChange 当在文本框中的选择内容发生变化的时候会调用这个方法, 简单点儿就是光标位置和上次不同,就会调用。 调用时机包括: 选择文本, 长点击重新定位光标位置, 输入和删除文字, 光标focus到不同的item时
                    //这个特性就可以使用在一种使用场景下,比如 设置了clearTextOnFocus = {true}属性,清空内容后选择登录按钮,此时需要监测各个输入框是否已经有内容,那么用textchange之类的是无法判断出来的,
                    onSelectionChange={(event) => this._onSelectionChange(event.nativeEvent.selection.start + event.nativeEvent.selection.end)}
                    onSubmitEditing={(event) => this.refs.PASSWORDTEXTINPUT.focus()}
                />

                <TextInput
                    ref='PASSWORDTEXTINPUT'
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    placeholder='Password'
                    onChangeText={(text) => this._onChangeText(text)}
                    onChange={(event) => this._onChange('onChange text: ' + event.nativeEvent.text)}
                    onEndEditing={(event) => this._onEndEditing('onEndEditing text: ' + event.nativeEvent.text)}
                    //如果属性设置了clearTextOnFocus为true,意思是第二次回到同一个itme的时候自动清空里面的内容,那么onChangeText就不会被重新调用,那么保存的还是上一次的值。当判断值不为空的情况下就会出错。
                    //这种情况下就需要判断onSelectionChange中的range是否为0来判断了。如果使用其它的例如changetext方法来判断结果会得到上次存储的结果,因为这种情况下是不会调用诸如此类text改变的方法的
                    clearTextOnFocus={true}
                    onFocus={(event) => this._onFocus}
                    enablesReturnKeyAutomatically={true}
                    returnKeyType='go'
                    onSelectionChange={(event) => this._onSelectionChange(event.nativeEvent.selection.start + event.nativeEvent.selection.end)}
                    onSubmitEditing={(event) => this._onSubmitEditing('onSubmitEditing text: ' + event.nativeEvent.text)}

                />

            </View>
        );
    }
}
