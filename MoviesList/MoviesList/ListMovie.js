import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView
} from 'react-native';

// 通过ListView实现电影列表
var movies = require("./data.json").data.movies;

// 创建组件
export default class ListMovie extends Component {

    constructor(props) {
        super(props);
        
        var ds = new ListView.DataSource({
            rowHasChanged: (oldData, newData) => oldData !== newData
        });
        this.state = ({
            dataSource: ds.cloneWithRows(movies)
        });
    }

    _renderRow(movie) {
        return (
            <View style={styles.row}>
                <Image style={styles.img} source={{uri: movie.img}}/>
                <View style={styles.right}>
                    <Text style={styles.name}>{movie.nm}</Text>
                    <Text style={styles.dir}>导演：{movie.dir}</Text>
                    <Text style={styles.dir}>上映时间：{movie.rt}</Text>
                </View>
            </View>
        )
    }

    _renderHeader() {
        return (
            <View style={styles.header}>
                <Text style={styles.title}>猫眼热门电影</Text>
                <View style={[styles.separator, {width: "100%"}]}></View>
            </View>
        )
    }

    _renderSeparator() {
        return <View style={styles.separator}></View>
    }

    render () {
        return <ListView style={styles.container}
                         dataSource={this.state.dataSource}
                         renderRow={this._renderRow}
                         renderHeader={this._renderHeader}
                         renderSeparator={this._renderSeparator}
               />
    }
}

// 实例化样式
var styles = StyleSheet.create({
    container: {
        marginTop: 25
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10
    },
    img: {
        width: 78,
        height: 128
    },
    right: {
        marginLeft: 15,
        flex: 1
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 3,
        marginBottom: 10
    },
    dir: {
        fontSize: 15,
        marginBottom: 3,
        color: "#686868"
    },
    header: {
        height: 44,
        alignItems: "center"
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        lineHeight: 44
    },
    separator: {
        height: 1,
        backgroundColor: "#ccc"
    }
});
