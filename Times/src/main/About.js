import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
} from 'react-native';

import Banner from '../common/Banner';
import constant from '../common/Constant';

var banner = [
    'http://oweq6in8r.bkt.clouddn.com/about.jpg',
    'http://oweq6in8r.bkt.clouddn.com/liuliangqiu.jpg',
    'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1305/16/c4/20983235_1368676162947.jpg',
    'http://imgstore.cdn.sogou.com/app/a/100540002/593589.jpg'
];
export default class About extends Component {

    render() {
        return (
            <View style={styles.container}>
                {/*将banner数据设置给Banner组件*/}
                <Banner
                    bannerData={banner}/>

                <ScrollView>
                    <View style={styles.aboutAuthor}>
                        <Text style={styles.title}>about author</Text>
                        {/*CSDN*/}
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{color: constant.textBlack}}>　CSDN：</Text>
                            <Text style={{color: constant.activeColor}} onPress={() => {
                                this.props.navigation.navigate('Details', {title: 'CSDN', url: 'http://blog.csdn.net/a_zhon'})
                            }}>http://blog.csdn.net/a_zhon
                            </Text>
                        </View>
                        {/*GitHub*/}
                        <View style={{flexDirection: 'row', marginTop: 3}}>
                            <Text style={{color: constant.textBlack}}>　GitHub：</Text>
                            <Text style={{color: constant.activeColor}} onPress={() => {
                                this.props.navigation.navigate('Details', {title: 'GitHub', url: 'https://github.com/azhon'})
                            }}>https://github.com/azhon
                            </Text>
                        </View>
                        {/*Email*/}
                        <View style={{flexDirection: 'row', marginTop: 3}}>
                            <Text style={{color: constant.textBlack}}>　Email：</Text>
                            <Text style={{color: constant.activeColor}}>958460248@qq.com</Text>
                        </View>
                    </View>
                    {/*源码地址*/}
                    <View style={styles.aboutAuthor}>
                        <Text style={styles.title}>source code</Text>
                        <Text style={{color: constant.activeColor}} onPress={() => {
                            this.props.navigation.navigate('Details', {title: '源码地址', url: 'https://github.com/azhon/Time'})
                        }}>　https://github.com/azhon/Time</Text>
                    </View>
                    {/*关于app*/}
                    <View style={styles.aboutAuthor}>
                        <Text style={styles.title}>about app</Text>
                        <Text
                            style={{color: constant.textBlack}}>　温馨提示：建议WiFi状态下使用</Text>
                        <Text
                            style={{color: constant.textBlack,marginTop:5}}>　使用易源Api(SHOWAPI)接口</Text>
                        <Text
                            style={{color: constant.textBlack,marginTop:5}}>　使用到的Library</Text>
                        <Text
                            style={{color: constant.textBlack}}>　　1.react-navigation</Text>
                        <Text
                            style={{color: constant.textBlack}}>　　2.react-native-easy-toast</Text>
                    </View>
                    <View style={styles.bottom}>
                        <Text style={{textAlign: 'center',color: constant.textGray}}>我是有底线的</Text>
                    </View>
                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    aboutAuthor: {
        flex: 1,
        marginTop: 10,
        paddingTop: 8,
        paddingLeft: 20,
        paddingBottom: 8,
        backgroundColor: 'white',
    },
    bottom: {
        flex: 1,
        marginTop: 10,
        height: 40,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    title: {
        marginBottom: 8,
        fontSize: 18,
        color: constant.textBlack,
    }
});