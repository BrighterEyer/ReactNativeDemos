import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    SectionList,
    Dimensions,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';

import ParcelData from './ParcelData.json';

let {width, height} = Dimensions.get('window');

let Headers = [];


export default class ParcelPage extends Component {

    static navigationOptions = ({navigation}) => ({
        headerTitle: '联动List',
    });

    componentDidMount() {
        ParcelData.map((item, i) => {
            Headers.push(item.section);
        });
    };

    componentWillUnmount() {
        Headers = [];
    };

    renderLRow = (item) => {
        return (
            <TouchableOpacity style={[styles.lItem, {backgroundColor: item.index == this.state.cell ? 'white' : null}]}
                              onPress={() => this.cellAction(item)}>
                <Text style={styles.lText}>{item.item.section}</Text>
            </TouchableOpacity>
        );
    };

    cellAction = (item) => {
        if (item.index <= ParcelData.length) {
            this.setState({
                cell: item.index,
            });
            if (item.index > 0) {
                let count = 0;
                for (let i = 0;
                     i < item.index;
                     i++) {
                    count += ParcelData[i].data.length + 1;
                }

                this.sectionList.scrollToLocation({
                    itemIndex: count,
                })
            } else {
                this.sectionList.scrollToLocation({
                    itemIndex: 0,
                })
            }
        }
    };

    itemChange = (info) => {
        let section = info.viewableItems[0].section.section;
        if (section) {
            let index = Headers.indexOf(section);
            if (index < 0) {
                index = 0;
            }
            this.setState({cell: index});
        }
    };

    state = {
        cell: 0,
    };

    renderRRow = (item) => {
        return (
            <View style={styles.rItem}>
                <Image style={styles.icon} source={{uri: item.item.img}}/>
                <View style={styles.rItemDetail}>
                    <Text style={styles.foodName}>{item.item.name}</Text>
                    <View style={styles.saleFavorite}>
                        <Text style={styles.saleFavoriteText}>{item.item.sale}</Text>
                        <Text style={[styles.saleFavoriteText, {marginLeft: 15}]}>{item.item.favorite}</Text>
                    </View>
                    <Text style={styles.moneyText}>￥{item.item.money}</Text>
                </View>
            </View>
        );
    };

    sectionComp = (section) => {
        return (
            <View style={{height: 30, backgroundColor: '#DEDEDE', justifyContent: 'center', alignItems: 'center'}}>
                <Text>{section.section.section}</Text>
            </View>
        );
    };

    separator = () => {
        return (
            <View style={{height: 1, backgroundColor: 'gray'}}/>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    ref='FlatList'
                    style={styles.leftList}
                    data={ParcelData}
                    renderItem={(item) => this.renderLRow(item)}
                    ItemSeparatorComponent={() => this.separator()}
                    keyExtractor={(item) => item.section}
                />
                <SectionList
                    ref={ref => this.sectionList = ref}
                    style={styles.rightList}
                    renderSectionHeader={(section) => this.sectionComp(section)}
                    renderItem={(item) => this.renderRRow(item)}
                    sections={ParcelData}
                    keyExtractor={(item) => item.name}
                    onViewableItemsChanged={(info) => this.itemChange(info)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    leftList: {
        width: 1 * width / 4,
        backgroundColor: '#E9E9EF',
    },
    lItem: {
        minHeight: 44,
        justifyContent: 'center',
    },
    lText: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 16,
    },
    rightList: {
        width: 3 * width / 4,
    },
    rItem: {
        flexDirection: 'row',
    },
    rItemDetail: {
        flex: 1,
        marginTop: 10,
        marginLeft: 5,
    },
    icon: {
        height: 60,
        width: 60,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 8,
        borderWidth: 1,
        borderColor: '#999999',
    },
    foodName: {
        fontSize: 18,
    },
    saleFavorite: {
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
    },
    saleFavoriteText: {
        fontSize: 13,
    },
    moneyText: {
        color: 'orange',
    },
});
