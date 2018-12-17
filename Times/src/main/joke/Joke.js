import React, {Component} from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native';

/**
 * 首页笑话
 */

import constant from '../../common/Constant'
import ErrorView from '../../common/ErrorView'

let page = 1;//当前页码

export default class Joke extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],//数据
            refreshing: false,//当前的刷新状态
            loadMore: false,//当前上拉的状态
            error: false,//当前是不是／没有数据／网络错误／出错
        };
    }

    render() {
        //根据当前状态 显示对于的控件
        const content = this.state.error ? <ErrorView/> : this.getFlatList();
        return (
            <View style={styles.container}>
                {/*状态栏颜色*/}
                <StatusBar
                    backgroundColor={constant.primaryColor}
                    barStyle={'light-content'}/>
                <TouchableOpacity activeOpacity={1} onPress={
                    () => {
                        this.onRefresh();
                    }
                }>
                    {content}
                </TouchableOpacity>
            </View>
        );
    }

    getFlatList() {
        return <FlatList
            style={{marginBottom: 5}}
            data={this.state.data}
            keyExtractor={this.keyExtractor}
            renderItem={this.getView}
            //下拉刷新，必须设置refreshing状态
            onRefresh={this.onRefresh}
            refreshing={this.state.refreshing}
            //上拉加载
            onEndReachedThreshold={0.1}
            onEndReached={this.onEndReached}
        />
    }

    componentDidMount() {
        //参数拼接
        const url = constant.jokeUrl + page;
        this.requestData(url);
    }

    /**
     * 给列表设置id
     * @param item
     * @param index
     * id 这先使用随机数
     */
    keyExtractor = (item, index) => Math.random() * 1000;


    /**
     * 下拉刷新
     */
    onRefresh = () => {
        //设置刷新状态为正在刷新
        page = 1;
        this.setState({
            refreshing: true,
        });
        const url = constant.jokeUrl + page;
        this.requestData(url);
    };
    /**
     * 上拉加载
     * @param info
     */
    onEndReached = (info: { distanceFromEnd: number }) => {
        if ((info.distanceFromEnd > 0 ) && !this.state.loadMore) {
            page++;
            this.setState({
                loadMore: true,
            });
            const url = constant.jokeUrl + page;
            this.requestData(url);
        }
    };

    /**
     * item
     * @returns {XML}
     */
    getView({item}) {
        //替换调html标签
        var reg = new RegExp("[<br/>]", "g"); //创建正则RegExp对象
        var s = item.text.replace(reg, '');
        //这里返回的就是每个Item
        return (
            <TouchableOpacity style={styles.item} activeOpacity={0.5}>
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                    {/*开头添加两个空格*/}
                    <Text style={styles.content} selectable={true}>{'　　' + s}</Text>
                </View>
            </TouchableOpacity>
        )
    };


    requestData(url) {
        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                //解析json数据
                const content = response['showapi_res_body'];
                const list = content['contentlist'];
                //上拉加载中
                if (this.state.loadMore) {
                    //生成一个新数组
                    const newArray = this.state.data.concat(list);
                    //往数据源中添加数据
                    this.setState({
                        data: newArray,
                        loadMore: false,
                    });
                } else {
                    //下拉刷新中
                    const hasData = list.length > 0;
                    this.setState({
                        data: list,
                        error: !hasData,
                        refreshing: false,
                    });
                }

            })
            .catch((error) => {
                if (error) {
                    //网络错误处理
                    this.setState({
                        error: true,
                        refreshing: false,
                    });
                }
            });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: constant.background,
    },
    item: {
        flexWrap: 'wrap',
        flexDirection: 'column',
        borderRadius: 5,
        backgroundColor: 'white',
        marginTop: 8,
        marginLeft: 10,
        marginRight: 10,
    },
    title: {
        color: constant.textBlack,
        textAlign: 'center',
        marginTop: 15,
        fontSize: 16,
    },
    content: {
        margin: 10,
        color: constant.textGray,
        alignItems: 'center',
        fontSize: 14,
    }
});