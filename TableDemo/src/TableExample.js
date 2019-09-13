import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Row, Rows, Table} from 'react-native-table-component';
import {Button, Toast} from '@ant-design/react-native';

export default class TableExample extends Component {
    constructor(props) {
        super(...arguments);
    }


    render() {

        const options = {
            tableHead: ['name', 'sum', 'ok', 'no', 'stop', 'other'],
            tableData: [
                ['RN 1',
                    125,
                    110,
                    15,
                    5,
                    <Button type='primary' size='small' onPress={() => Toast.info('You clicked on me ! !')}>查看</Button>,
                ],
                [
                    'RN 2',
                    525,
                    325,
                    200,
                    50,
                    <Button type='primary' size='small'
                            onPress={() => Toast.info('You clicked on me ! !')}>查看</Button>],
                [
                    'RN 3',
                    800,
                    500,
                    300,
                    100,
                    <Button type='primary' size='small'
                            onPress={() => Toast.info('You clicked on me ! !')}>查看</Button>],
                [
                    '合计',
                    1450,
                    835,
                    515,
                    155,
                    <Button type='primary' size='small' onPress={() => Toast.info('You clicked on me ! !')}>查看</Button>],
            ],
        };
        return (
            <View style={styles.container}>
                <View style={styles.titleView}>
                    <TouchableOpacity>
                        <Text style={styles.titleStyle}>
                            数量统计
                        </Text>
                    </TouchableOpacity>
                </View>

                <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                    <Row data={options.tableHead} style={styles.head} textStyle={styles.text}/>
                    <Rows data={options.tableData} textStyle={styles.text}/>
                </Table>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
    head: {
        height: 40,
        backgroundColor: '#f1f8ff',
    },
    text: {
        margin: 10,
        textAlign: 'center',
    },
    titleView: {
        height: Platform.OS === 'ios' ? 64 : 44,
        paddingTop: Platform.OS === 'ios' ? 14 : 0,
        marginBottom: 10,
        backgroundColor: '#4a65ff',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    titleStyle: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },
});
