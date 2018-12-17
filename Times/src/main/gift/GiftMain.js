/**
 * 笑话 主页面
 * @flow
 */

import React, {Component} from 'react';
import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';


import constant from '../../../src/common/Constant'
import SmallFresh from './SmallFresh';
import LiteraryStyle from './LiteraryStyle';
import BigLegs from './BigLegs';

const StyleSheet = require('../../../src/common/StyleSheet');

const styles = StyleSheet.create({
    //结局ios上文字不垂直居中问题
    tabStyle: {
        ios: {
            height: 35,
        },
        android: {},
    }
});
export default Tab = TabNavigator({

    //每一个页面的配置
    SmallFresh: {
        screen: SmallFresh,
        navigationOptions: {
            tabBarLabel: '小清新',
        },
    },
    LiteraryStyle: {
        screen: LiteraryStyle,
        navigationOptions: {
            tabBarLabel: '文艺范',
        }
    },
    BigLegs: {
        screen: BigLegs,
        navigationOptions: {
            tabBarLabel: '大长腿',
        }
    }

}, {
    //设置TabNavigator的位置
    tabBarPosition: 'top',
    //当两个TabNavigator嵌套时需要这样设置
    animationEnabled: false,
    swipeEnabled: false,
    //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    backBehavior: "none",
    //设置Tab标签的属性
    tabBarOptions: {
        //共有属性
        showIcon: false,
        activeTintColor: constant.activeColor,//label和icon的前景色 活跃状态下（选中）
        inactiveTintColor: constant.primaryColor,//label和icon的前景色 活跃状态下（未选中）
        style: { //TabNavigator 的背景颜色
            backgroundColor: 'white',
        },
        indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
            backgroundColor: constant.activeColor,
        },
        labelStyle: {//文字的样式
            fontSize: 14,
        },
        tabStyle: styles.tabStyle,
    },
});
