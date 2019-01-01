import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import SecondPageComponent from './SecondPageComponent';

export default class FirstPageComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: 2,
            user: null,
        }
    }

    _pressButton() {
        let _this = this;
        const { navigator } = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'SecondPageComponent',
                component: SecondPageComponent,
                //这里多出了一个 params 其实来自于<Navigator 里的一个方法的参数...
                //routes.params 里的每个key 作为props的一个属性:
                //这里的 params.id 就变成了 <Navigator id={} 传递给了下一个页面
                params: {
                    id: this.state.id,
                    //回调!从SecondPageComponent获取user
                    getUser: function(user) {
                        _this.setState({
                            user: user
                        })
                    }
                }
            });
        }
    }

    render() {
        if( this.state.user ) {
            return(
                <View>
                    <Text>用户信息: { JSON.stringify(this.state.user) }</Text>
                </View>
            );
        }else {
            return(
                <View>
                    <TouchableOpacity onPress={this._pressButton.bind(this)}>
                        <Text>查询ID为{ this.state.id }的用户信息</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }
}
