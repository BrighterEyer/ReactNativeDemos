import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';


//屏幕的宽度
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

//定义一些全局的变量
const cols = 3;
const boxW = 100;
const vMargin = (width - cols * boxW) / (cols + 1);
const hMargin = 25;

type Props = {
    navigation: any,
    list: Array<Object>,
    selectedIndex: number,
    onSelected: Function,
}


class GridView extends Component<Props> {

    static navigationOptions = {
        headerTitle: '',
    };

    render() {
        return (
            <View style={styles.container}>
                {this.renderAllBadge()}
            </View>
        );
    }

    renderCell(i, item) {
        return (<View key={i}
                      style={styles.outViewStyle}>
            <Text style={styles.mainTitleStyle}>
                {item.title}
            </Text>
        </View>);
    };

    // 返回所有的包
    renderAllBadge() {
        // 定义数组装所有的子组件
        let allBadge = [];

        // 遍历json数据
        for (let i = 0; i < this.props.list.length; i++) {
            // 取出每一个数据对象
            let item = this.props.list[i];
            // 装入数据
            allBadge.push(this.renderCell(i, item));
        }
        // 返回数组
        return allBadge;
    }
}

//设置样式
const styles = StyleSheet.create({
    container: {
        //    确定主轴的方向
        flexDirection: 'row',
        //    一行显示不完的话换行显示
        flexWrap: 'wrap',
        //    换行以后,
        backgroundColor: '#F5FCFF',
        height: '100%',

    },
    outViewStyle: {
        //    设置侧轴的对齐方式
        alignItems: 'center',
        width: boxW,
        height: boxW,
        marginLeft: vMargin,
        marginTop: hMargin,
    },
    iconStyle: {
        width: 80,
        height: 80,
        marginBottom: 5,
    },
    mainTitleStyle: {},
});

export default GridView;
