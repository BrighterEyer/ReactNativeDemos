<a href="http://www.hangge.com/blog/cache/detail_1618.html" target="_blank">航歌 React Native - 调用摄像头拍照</a>
```
npm install react-native-camera@latest --save
npm audit fix
react-native link react-native-camera
react-native run-android

检查文件 android/setting.gradle 中的斜杆
include ':react-native-camera'
project(':react-native-camera').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-camera/android')
```