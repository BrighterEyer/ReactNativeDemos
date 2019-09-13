import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Alert,
} from 'react-native';
import Button from './Button';

const {width, height} = Dimensions.get('window');


type Props = {
    min: number, // 最小值
    max: number, // 最大值
    step: number, // 增减数
    defaultValue: number, // 默认值
    onChange: Function, //
}

//模块声名并导出
export default class Stepper extends Component<Props> {

    //构造函数
    constructor(props) {
        super(props);
        this.state = { //状态机变量声明
            currentNumber: this.props.defaultValue,
            interval: 200,//控制增加、减少数量间隔
        };
    }

    // 单击减少
    decrease() {
        let newValue = this.state.currentNumber - this.props.step;
        if (newValue < this.props.min) {
            newValue = this.props.min;
        }
        this.setState({
            currentNumber: newValue,
        }, () => {
            this.onChange(newValue);
        });
    }

    // 单击增加
    increase() {
        let newValue = this.state.currentNumber + this.props.step;

        if (newValue > this.props.max) {
            newValue = this.props.max;
        }
        this.setState({
            currentNumber: newValue,
        }, () => {
            this.onChange(newValue);
        });
    }

    //变化
    onChange(newValue) {
        if (this.props.onChange) {
            this.props.onChange(newValue);
        }
    }

    // 长按减少
    longDecrease() {
        this.autoInterval = setInterval(this.decrease.bind(this), this.state.interval);
    }

    // 长按增加
    longIncrease() {
        this.autoInterval = setInterval(this.increase.bind(this), this.state.interval);
    }

    // 手指离开的时候，移除定时器
    onTouchEnd() {
        if (this.autoInterval) {
            clearInterval(this.autoInterval);
            this.autoInterval = null;
        }
    }

    //渲染
    render() {
        // console.log('-------', this.props.defaultValue);
        // console.log('-------', this.state.currentNumber);

        return (
            <View style={[styles.container, this.props.style]}>
                <View style={{flexDirection: 'row', borderColor: '#e1e1e1', borderWidth: 0.5, borderRadius: 4}}>
                    <Button
                        style={[styles.buttonStyle]}
                        underlayColor='#ffffff88'
                        txtStyle={{color: 'black', fontSize: 14}}
                        onPress={() => {
                            this.decrease();
                        }}
                        onLongPress={() => this.longDecrease()}
                        onPressOut={() => this.onTouchEnd()}>－</Button>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderLeftWidth: 0.5,
                        borderRightWidth: 0.5,
                        borderColor: '#e1e1e1',
                    }}>
                        <Text style={{textAlign: 'center', fontSize: 16, width: 40}}>{this.state.currentNumber}</Text>
                    </View>

                    <Button
                        style={[styles.buttonStyle]}
                        underlayColor='#ffffff88'
                        txtStyle={{color: 'black', fontSize: 14}}
                        onPress={() => {
                            this.increase();
                        }}
                        onLongPress={() => this.longIncrease()}
                        onPressOut={() => this.onTouchEnd()}>＋</Button>
                </View>
            </View>
        );
    }

};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    buttonStyle: {
        borderRadius: 4,
        paddingTop: 5,
        paddingBottom: 5,
        width: 30,
        height: 22,
    },
});
