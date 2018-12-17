import React from 'react';
import { Animated, Easing,Text, View } from 'react-native';

class FadeInView extends React.Component {
    state = {
        fadeAnim: new Animated.Value(0), // 透明度初始值设为0
    }

    componentDidMount() {
        Animated.timing(                  // 随时间变化而执行动画
          this.state.fadeAnim,            // 动画中的变量值
          {
            toValue: 1,                   // 透明度最终变为1，即完全不透明
            easing: Easing.back(),
            duration: 3000,              // 让动画持续一段时间
          }
        ).start();                        // 开始执行动画
    }

    render() {
        let { fadeAnim } = this.state;

        return (
        <Animated.View // 使用专门的可动画化的View组件
            style = {
                {
                    ...this.props.style,
                    opacity: fadeAnim, // 将透明度指定为动画变量值
                }
            } >
            { this.props.children } 
            </Animated.View>
        );
    }
}

export default class FadeInAnimation extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                  <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </FadeInView>
            </View>
        )
    }
}