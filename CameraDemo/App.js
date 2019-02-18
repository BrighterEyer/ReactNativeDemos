
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';
 
export default class App extends Component {
  //构造函数
  constructor(props) {
      super(props);
      this.state = {
            cameraType: Camera.constants.Type.back
      };
  }
 
  //渲染
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          type={this.state.cameraType}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.button} onPress={this.switchCamera.bind(this)}>[切换摄像头]</Text>
          <Text style={styles.button} onPress={this.takePicture.bind(this)}>[拍照]</Text>
        </Camera>
      </View>
    );
  }
 
  //切换前后摄像头
  switchCamera() {
    var state = this.state;
    if(state.cameraType === Camera.constants.Type.back) {
      state.cameraType = Camera.constants.Type.front;
    }else{
      state.cameraType = Camera.constants.Type.back;
    }
    this.setState(state);
  }
 
  //拍摄照片
  takePicture() {
    this.camera.capture()
      .then(function(data){
        alert("拍照成功！图片保存地址：\n"+data.path)
      })
      .catch(err => console.error(err));
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  toolBar: {
    width: 200,
    margin: 40,
    backgroundColor: '#000000',
    justifyContent: 'space-between',
 
  },
  button: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40,
  }
});
