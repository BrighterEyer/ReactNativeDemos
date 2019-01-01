/** @format */

import React, {Component} from 'react';
// import App from './App';
import {name as appName} from './app.json';
import { AppRegistry,DeviceEventEmitter,Image,Navigator,ScrollView,StyleSheet,Text, TouchableOpacity, TouchableHighlight,View } from 'react-native';
import Util from './view/utils';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import PropTypes from 'prop-types';


import Watch from './view/day01';
// import MyVedio from './view/day06';//到react-native-video模块下替换PropTypes,npm i --save prop-types，不过中间内容依然空白
// import Day08 from './view/day08';//引用了day05，去掉day05后，内容空白
// import Day09 from './view/day09';//github帖子
// import Day10 from './view/day10';//下滑显示其它文本
// import Day13 from './view/day13';//消息发送界面
// import Day14 from './view/day14';//到react-native-swipe-cards模块下更新PropTypes，npm i --save prop-types，注释掉View.propTypes.style
// import Day15 from './view/day15';//部分成功，DatePickerIOS
// import Day16 from './view/day16';//手势解锁成功，修改react-native-gesture-password/source/line.js、circle.js、index.js中的PropTypes，npm i --save prop-types
// import Day17 from './view/day17';//可下拉列表
// import Day18 from './view/day18';//可拖动替换位置的网格图标
// import Day19 from './view/day19';//解锁之后跳转页面，引用了day16，默认密码123，npm i react-native-touch-id
// import Day20 from './view/day20';//点击item，动画效果报错
// import Day21 from './view/day21';//更炫的item，点击item，动画效果报错
// import Day22 from './view/day22';//录音，讲话
// import Day23 from './view/day23';//WebView解析html，一开始显示正常，点击一项后，报undefined is not an object (evaluating 'this.props.navigator.push')
// import Day24 from './view/day24';//ScrollableTabView，npm i --save create-react-class react-native-scrollable-tab-view
// import Day25 from './view/day25';//IOS webbrowser，绿色背景
// import Day26 from './view/day26';//右拉抽屉，引用day22、day24、day20，PanResponder

// import WeatherApp from './view/day02';//空的
// import Day04 from './view/day04';//空的
// import Day07 from './view/day07';//绿地
// import Day28 from './view/day28';//空白
// import Day29 from './view/day29';//无特别之处


export default class App extends Component{

	render(){
		return (
			<Watch/>
			);
	}
}

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => App);
