import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    RefreshControl
} from 'react-native';
import dataSource from './data.json';
// 创建组件
export default class Scroll extends Component {
    // 下面的几种函数可以根据自己的需求添加
    _onScrollBeginDrag() {
       // 这里是开始拖拽的函数
    }
    _onScrollEndDrag() {
       // 这里是拖拽结束的函数
    }
    _onMomentumScrollBegin() {
       // 这里是开始滚动的函数
    }
    _onMomentumScrollEnd() {
       // 这里是滚动结束的函数
    }
    _refresh() {
       // 这里是请求数据的函数
       // alert("正在请求数据");
    }
    render() {
       return (<ScrollView style={styles.container}
                        onScrollBeginDrag={this._onScrollBeginDrag}
                        onScrollEndDrag={this._onScrollEndDrag}
                        onMomentumScrollBegin={this._onMomentumScrollBegin}
                        onMomentumScrollEnd={this._onMomentumScrollEnd}
                        refreshControl={
                            <RefreshControl refreshing={false}
                                            titleColor={"red"}
                                            title={"正在刷新......."}
                                            tintColor={"cyan"}
                                            onRefresh={this._refresh} />
                        }>
                <View style={[styles.item, styles.item1]}></View>
                <View style={[styles.item, styles.item2]}></View>
                <View style={[styles.item, styles.item3]}></View>
              </ScrollView>
        );
    }
}

// 实例化样式
const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        height: 300,
        borderWidth: 1,
        borderColor: "#ccc"
    },
    item: {
        width: 280,
        height: 150,
        margin: 20
    },
    item1: {
        backgroundColor: "red"
    },
    item2: {
        backgroundColor: "green"
    },
    item3: {
        backgroundColor: "yellow"
    }
});
