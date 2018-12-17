import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    PanResponder,
} from 'react-native';
import Utils from './common/Utils'
const EXPROTHEIGHT = 20;

export default class CustomScrollView extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[
                {name:'五花肉',},
                {name:'青椒',},
                {name:'红椒',},
            ],
        }

        this.itemHight = 50;
        this.interval = 5;
        this.countHeigth =  this.itemHight+this.interval; // interval为中间的间隙。
        this.scrollOffsetY = 0;
        this.items = [];
        this.order = [];
        this.ViewHeight = (this.state.data.length)*this.countHeigth>Utils.size.height-20-Utils.statusBarHeight?
            (this.state.data.length)*this.countHeigth:Utils.size.height-20-Utils.statusBarHeight,
        this.scrollArray = [];

    }

    static navigationOptions = { 
        header:null,
    };

    render(){
        return(
            <View style={styles.container}>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    onScrollEndDrag={(e)=>this.exportOnScrollEndDrag(e)}
                    onMomentumScrollEnd={(e)=>this.exportonMomentumScrollEnd(e)}
                    ref = {(ref)=>{this.outsideScroll = ref}}
                >
                    <View style={{height:this.ViewHeight,width:Utils.size.width}}>
                        {this.state.data.map((item,index)=>{
                            return(
                                <View 
                                    ref={
                                        (ref)=>{
                                            if(index == this.items.length&&ref != null){
                                                this.items[this.items.length] = ref;
                                                this.order.push(index);
                                            }
                                        }
                                    }
                                    key={index+''} 
                                    style={{
                                        top:this._getTopValueYById(index),
                                        position: 'absolute',
                                        width:Utils.size.width-40,
                                        height:this.itemHight,
                                        backgroundColor:'white',
                                        marginBottom:this.interval,
                                        elevation:2,
                                        justifyContent:'center'
                                    }}
                                >
                                    <ScrollView
                                        ref={(ref)=>{
                                            if(index == this.items.length&&ref != null){
                                              this.scrollArray[index] = ref;
                                            }
                                          }}
                                        horizontal={true}
                                        style={{
                                            // backgroundColor:'red'
                                        }}
                                        showsHorizontalScrollIndicator={false}
                                        onTouchStart = {(e)=>{this.onTouchStart(e,index)}}                                        
                                        onMomentumScrollEnd = {(e)=>{this.onMomentumScrollEnd(e,index)}}
                                    >
                                        <View style={{width:Utils.size.width-40,height:this.itemHight,justifyContent:'center'}}>
                                            <TouchableOpacity style={{marginLeft:10,marginRight:10}} onPress={()=>{console.log(index)}}>
                                                <View style={{flexDirection:'row',}}>
                                                    <Image 
                                                        source={require('./resources/image/moveImage.png')} 
                                                        style={{width:30,height:30}}
                                                        {...this._panResponder.panHandlers}
                                                    />
                                                    <Text style={{marginLeft:10,fontSize:18}}>
                                                        {item.name}
                                                    </Text>
                                                </View>
                                             </TouchableOpacity>
                                        </View>
                                        <TouchableOpacity 
                                                onPress={this.removeItem.bind(this,index)}
                                                style={{
                                                    width:this.itemHight,
                                                    height:this.itemHight,     
                                                    justifyContent:'center',
                                                    alignItems:'center',
                                                    backgroundColor:'red'
                                                    }}>
                                                    <Text style={{fontSize:15}}>{"删除"}</Text>
                                        </TouchableOpacity>                                  
                                    </ScrollView>
                                </View>
                            )
                        })}
                    </View>
                </ScrollView>
                <TouchableOpacity 
                    onPress={
                        this.addItem.bind(this)
                    } 
                    style={{
                        top:0.8*Utils.size.height,
                        left:0.7*Utils.size.width,
                        position: 'absolute',
                    }}>
                        <Image style={{zIndex:2}} source={require('./resources/image/add.png')}></Image>
                </TouchableOpacity>
            </View>
        )
    }

    addItem(){
        // 这里是将所有的内部 scrollArray 回归原位 
        for(let i = 0;i<this.scrollArray.length;i++){
            this.scrollArray[i].scrollTo({x: 0, y: 0, animated: false})
        }

        let temp = this.state.data;
        temp[temp.length] = {name:'五花肉'+temp.length}
        this.setState({
            data:temp,
        });      
    }

    exportOnScrollEndDrag(e){
        this.scrollOffsetY = e.nativeEvent.contentOffset.y;
    }
     
    exportonMomentumScrollEnd(e){
        this.scrollOffsetY =  e.nativeEvent.contentOffset.y;
    }

    componentWillMount(){
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
      
            onPanResponderGrant: (evt, gestureState) => {
                this.setState(()=>{
                    return {
                        scrollflag:false,
                    }
                });
                const {pageY, locationY} = evt.nativeEvent;
                this.index = this._getIdByPosition(pageY);
                this.preY = pageY - locationY - EXPROTHEIGHT;
                let item = this.items[this.index];
                if(item == undefined) {
                    console.log(this.index);
                }
                this.start = this.index;
                this.end = this.index;
                item.setNativeProps({
                    style: {
                        shadowColor: "#333",
                        shadowOpacity: 0.3,
                        shadowRadius: 50,
                        shadowOffset: {height: 0, width: 2},
                        elevation: 5,
                        zIndex: 1,
                        backgroundColor:'gray',
                    }
                });
            },
            onPanResponderMove: (evt, gestureState) => {
                let top = this.preY + gestureState.dy+this.scrollOffsetY;
                let item = this.items[this.index];
                item.setNativeProps({
                    style: {top: top}
                });
        
                let collideIndex = this._getIdByPosition(evt.nativeEvent.pageY);
                if(collideIndex !== this.index && collideIndex !== -1) {
                    let collideItem = this.items[collideIndex];
                    collideItem.setNativeProps({
                        style: {top: this._getTopValueYById(this.index)}
                    });
                    [this.items[this.index], this.items[collideIndex]] = [this.items[collideIndex], this.items[this.index]];
                    [this.order[this.index], this.order[collideIndex]] = [this.order[collideIndex], this.order[this.index]];
                    this.index = collideIndex;
                    this.end = this.index;
                }
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: this._releaseAndTerminate.bind(this),
            onPanResponderTerminate: this._releaseAndTerminate.bind(this)
          });
    }

    componentWillUpdate(){
        this.ViewHeight = (this.state.data.length)*this.countHeigth>Utils.size.height-20-Utils.statusBarHeight?
            (this.state.data.length)*this.countHeigth:Utils.size.height-20-Utils.statusBarHeight;
    }

    _releaseAndTerminate(evt, gestureState){
        const shadowStyle = {
            shadowColor: "#000",
            shadowOpacity: 0,
            shadowRadius: 0,
            shadowOffset: {height: 0, width: 0,},
            backgroundColor:'white',
            elevation:2,
            zIndex: 0
        };
        this.items.splice(this.start,0,this.items.splice(this.end,1)[0]);
        for(let i = 0;i<this.items.length;i++){
            this.items[i].setNativeProps({
            style: {...shadowStyle,top: this._getTopValueYById(i)}
            })
        }
        this.items = [];
        this.order = [];
        this.scrollArray = [];
        let temp = this.state.data;
        temp.splice(this.end,0,temp.splice(this.start,1)[0]);

        this.setState(()=>{
            return {
                data:temp,
                scrollflag:true,
            }
        })
    }

    _getIdByPosition(pageY){
        pageY = pageY - EXPROTHEIGHT;
        var id = -1;
        id = Math.floor(parseFloat((pageY+this.scrollOffsetY)/(this.countHeigth)));
        if(id<0 || id >= this.state.data.length) {
            return -1;

        }
        return id;
    }

    _getTopValueYById(id){
        return (id) * (this.countHeigth);
    }

    //拖动，判断是否超过‘删除’View宽度的一半，超过显示，不超过隐藏
    onMomentumScrollEnd(e,index){
        let offsetX = e.nativeEvent.contentOffset.x;
        if(offsetX > this.itemHight/2){
            this.scrollArray[index].scrollTo({x: this.itemHight, y: 0, animated: false})
        }else{
            this.scrollArray[index].scrollTo({x: 0, y: 0, animated: false})
        }
    }

    onTouchStart(e,index){
        for(let i = 0;i<this.scrollArray.length;i++){
            if(i != index){
                this.scrollArray[i].scrollTo({x: 0, y: 0, animated: false})
            }
        }
    }

    removeItem(index){
        this.scrollArray[index].scrollTo({x: 0, y: 0, animated: false});
        this.items = [];
        this.order = [];

        if(this.scrollOffsetY > 0){
            this.scrollOffsetY -= this.itemHight;
            if(this.scrollOffsetY <0){
                this.scrollOffsetY = 0;
            }
    
            this.outsideScroll.scrollTo({x:0,y:this.scrollOffsetY,animated:false})
        }
        let temp = this.state.data;
        temp.splice(index,1);
        this.setState({
            data:temp,
        })

        this.scrollArray = [];
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        marginRight:20,
        marginLeft:20,
        marginTop:20
    },
});
