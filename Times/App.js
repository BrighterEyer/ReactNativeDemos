/**
 * 轻松一刻app 主页面
 * @flow
 */

import React, {Component} from 'react';
import {
    Image,
} from 'react-native';
import {
    TabNavigator,
    StackNavigator,
} from 'react-navigation'

const StyleSheet = require('./src/common/StyleSheet');

const styles = StyleSheet.create({
    //结局ios上文字不垂直居中问题
    tabHeight: {//TabNavigator 的背景颜色
        ios: {
            backgroundColor: 'white',
        },
        android: {
            backgroundColor: 'white',
            height: 55,
        },
    },
    iconStyle: {
        ios: {
            marginBottom: 5,
        },
        android: {
            marginBottom: 5,
        },
    },
    labelStyle: {
        ios: {
            marginBottom: 5,
        },
        android: {
            fontSize: 13,
            marginTop: -5,
            marginBottom: 5,
        },
    }
});
import JokeMain from './src/main/joke/JokeMain';
import Quotations from './src/main/Quotations';
import GiftMain from './src/main/gift/GiftMain';
import About from './src/main/About';
import Details from './src/details/Details';

import constant from './src/common/Constant'

const Tab = TabNavigator({
    //每一个页面的配置
    Joke: {
        screen: JokeMain,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '笑话',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: constant.primaryColor},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 18,
                //居中显示
                alignSelf: 'center',
            },
            //tab 的属性
            tabBarLabel: '笑话',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./src/res/ic_joke.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
            ),

        },
    },
    Quotations: {
        screen: Quotations,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '鸡汤',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: constant.primaryColor},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 18,
                //居中显示
                alignSelf: 'center',
            },
            //tab 的属性
            tabBarLabel: '鸡汤',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./src/res/ic_duanzi.png')}
                    style={[{height: 26, width: 26}, {tintColor: tintColor}]}
                />
            ),
        }
    },
    Gift: {
        screen: GiftMain,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '福利',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: constant.primaryColor},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 18,
                //居中显示
                alignSelf: 'center',
            },
            //tab 的属性
            tabBarLabel: '福利',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./src/res/ic_gift.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                />
            ),
        }
    },
    About: {
        screen: About,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '关于',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: constant.primaryColor},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 18,
                //居中显示
                alignSelf: 'center',
            },
            //tab 的属性
            tabBarLabel: '关于',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./src/res/ic_about.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                />
            ),
        }
    },

}, {
    //设置TabNavigator的位置
    tabBarPosition: 'bottom',
    //是否在更改标签时显示动画
    animationEnabled: true,
    //是否允许在标签之间进行滑动
    swipeEnabled: true,
    //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    backBehavior: "none",
    //设置Tab标签的属性

    tabBarOptions: {
        //Android属性
        upperCaseLabel: false,//是否使标签大写，默认为true
        //共有属性
        showIcon: true,//是否显示图标，默认关闭
        showLabel: true,//是否显示label，默认开启
        activeTintColor: constant.activeColor,//label和icon的前景色 活跃状态下（选中）
        inactiveTintColor: constant.primaryColor,//label和icon的前景色 活跃状态下（未选中）
        style: styles.tabHeight,
        indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
            height: 0,
        },
        labelStyle: styles.labelStyle,//文字的样式
        //图标的样式
        iconStyle: styles.iconStyle,
    },
});
/*
 * 初始化StackNavigator
 */
export default Navi = StackNavigator({
    Tab: {
        screen: Tab,
    },
    //注册跳转的页面
    Details: {
        screen: Details
    }
});