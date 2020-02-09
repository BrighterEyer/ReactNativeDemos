
React-native 文件选择器react-native-file-selector的使用
```
https://blog.csdn.net/qq_20652771/article/details/82184005
https://my.oschina.net/HhhXxxJjj/blog/1936008
https://github.com/prscX/react-native-file-selector
```

关于需不需要link的
```
https://blog.csdn.net/dick3741/article/details/89918262
```

```
npm install --save react-native-file-selector
react-native link react-native-file-selector
```


android/build.gradle
```
repositories {
    maven {
        url  "http://dl.bintray.com/lukaville/maven"
    }
    maven { url "https://maven.google.com" }
    ...
}

allprojects {
    repositories {
        mavenLocal()
        jcenter()
        maven { url "https://maven.google.com" }
        maven {
            url  "http://dl.bintray.com/lukaville/maven"
        }
        ...
    }
}
```

在android\app\build.gradle中添加
```
implementation project(':react-native-file-selector')
```

添加选择文件主题颜色，可以自定义
```
#增加文件
android/app/src/main/res/values/colors.xml
#内容
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="colorPrimary">#3F51B5</color>
    <color name="colorPrimaryDark">#303F9F</color>
    <color name="colorAccent">#FF4081</color>
</resources>
```

添加权限 android\app\src\main\AndroidManifest.xml
```
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

在android/app/build.gradle中加入
```
build.gradle

defaultConfig {
	multiDexEnabled true
}

dependencies {
	implementation  'com.android.support:appcompat-v7:27.1.0'
	implementation  'com.android.support:design:27.1.0'
	implementation  'com.android.support:support-v4:27.1.0'
	implementation  'com.android.support:recyclerview-v7:27.1.0'
	implementation  'com.android.support:multidex:1.0.3'
}
```


android/build.gradle
```
// Top-level build file where you can add configuration options common to all sub-projects/modules.

buildscript {
    ext {
        buildToolsVersion = "28.0.3"
        minSdkVersion = 16
        compileSdkVersion = 28
        targetSdkVersion = 28
        supportLibVersion = "28.0.0"
    }
    repositories {
        google()
        jcenter()
        maven {
            url "http://dl.bintray.com/lukaville/maven"
        }
        maven { url "https://maven.google.com" }
    }
    dependencies {
        classpath('com.android.tools.build:gradle:3.3.0')

        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
}

allprojects {
    repositories {
        mavenLocal()
        maven {
            // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
            url("$rootDir/../node_modules/react-native/android")
        }
        maven {
            // Android JSC is installed from npm
            url("$rootDir/../node_modules/jsc-android/dist")
        }

        maven { url "https://jitpack.io" }
        maven { url "https://maven.google.com" }

        jcenter { url "http://jcenter.bintray.com/" }

        maven { url "http://dl.bintray.com/lukaville/maven" }

        google()
        jcenter()

    }
}
```

android/gradle/wrapper/gradle-wrapper.properties
```
distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
distributionUrl=https\://services.gradle.org/distributions/gradle-4.10.2-all.zip
android.enableAapt2=true
```

react-native-file-selector/build.gradle
```
compile 改为 implement
```


闪退问题
```
记得添加colors.xml文件
android/app/src/main/res/values/colors.xml
```

用法
```
import RNFileSelector from 'react-native-file-selector';


RNFileSelector.Show(
    {
        title: 'Select File',
        onDone: (path) => {
            console.log('file selected: ' + path)
        },
        onCancel: () => {
            console.log('cancelled')
        }
    }
)
```
