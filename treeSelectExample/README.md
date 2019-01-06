```
react-native init treeSelectExample
cd treeSelectExample
git clone https://github.com/suwu150/react-native-tree-select.git
#将react-native-tree-select/components 拷贝到 treeSelectExample目录下
npm install -g yarn rnpm
yarn add react-native-vector-icons
rnpm link react-native-vector-icons
#icons地址
#https://www.npmjs.com/package/react-native-vector-icons
react-native-vector-icons的集成心得
https://blog.csdn.net/f409031mn/article/details/79522129
react-native-vector-icons使用
https://blog.csdn.net/u010940770/article/details/71429599
```
# react-native-tree-select
react-native-tree-select
树结构选择组件
----
![The final rendering](https://github.com/suwu150/react-native-tree-select/blob/master/react-native-tree-select.gif?raw=true)
![The final rendering](https://github.com/suwu150/react-native-tree-select/blob/master/tree-select-style.gif?raw=true)

项目结构
```js
--components： treeSelect组件
--treeSelectExample： 组件演示代码
--.gitignore：git忽略文件
--README.md：说明文档
```
Example usage: 
--------------------------------------- 
1.基本用法    
 
 首先能够通过如下命令进行安装  

```$xslt
npm i react-native-tree-select
``` 
然后通过下面命令进行导入：
```$xslt
import TreeSelect from 'react-native-tree-select';
```
如下代码是简单的使用

```javascript
import TreeSelect from 'react-native-tree-select';

   ...
  render() {
    return (
      <TreeSelect
        data={treeselectData}
        isOpen
        openIds={['A01']}
        isShowTreeId={false}
        itemStyle={{
          // backgroudColor: '#8bb0ee',
          fontSize: 12,
          color: '#995962'
        }}
        selectedItemStyle={{
          backgroudColor: '#f7edca',
          fontSize: 16,
          color: '#171e99'
        }}
        onClick={this._onClick}
        onClickLeaf={this._onClickLeaf}
      />
    );
  }
```
注意：数据结构如下面形式：
```json
[
  {
    "id":"A",
    "name":"农、林、牧、渔业",
    "sortNo":"A",
    "parentId":"0",
    "children": [
      {
        "id":"A01",
        "name":"农业",
        "sortNo":"A01",
        "parentId":"A",
        "children": [
          {
            "id":"A011",
            "name":"谷物种植",
            "sortNo":"A011",
            "parentId":"A01"
          },
          {
            "id":"A012",
            "name":"豆类、油料和薯类种植",
            "sortNo":"A012",
            "parentId":"A01"
          },
          {
            "id":"A013",
            "name":"棉、麻、糖、烟草种植",
            "sortNo":"A013",
            "parentId":"A01"
          },
          {
            "id":"A014",
            "name":"蔬菜、食用菌及园艺作物种植",
            "sortNo":"A014",
            "parentId":"A01"
          },
          {
            "id":"A015",
            "name":"水果种植",
            "sortNo":"A015",
            "parentId":"A01"
          },
          {
            "id":"A016",
            "name":"坚果、含油果、香料和饮料作物种植",
            "sortNo":"A016",
            "parentId":"A01"
          },
          {
            "id":"A017",
            "name":"中药材种植",
            "sortNo":"A017",
            "parentId":"A01"
          }
        ]
      }
    ]
  },
  {
    "id":"B",
    "name":"采矿业",
    "sortNo":"B",
    "parentId":"0",
    "children": [
      {
        "id":"B06",
        "name":"煤炭开采和洗选业",
        "sortNo":"B06",
        "parentId":"B",
        "children": [
          {
            "id":"B061",
            "name":"烟煤和无烟煤开采洗选",
            "sortNo":"B061",
            "parentId":"B06"
          },
          {
            "id":"B062",
            "name":"褐煤开采洗选",
            "sortNo":"B062",
            "parentId":"B06"
          },
          {
            "id":"B069",
            "name":"其他煤炭采选",
            "sortNo":"B069",
            "parentId":"B06"
          }
        ]
      }
    ]
  }
]

```
2.传递的Props:   
---------------------------------------

|Props|Explain|type|require|default|          
|:-------|:--------|:--------|:-------|:----------|
|data|数据，树结构数据|array|yes|[]|    
|onClick|点击时的事件，返回点击的节点和节点路径{ item, routes }|function|no|no|    
|onClickLeaf|点击叶子节点时的事件，返回点击的节点和节点路径{ item, routes }|function|no|no|
|isOpen|是否默认打开所有的节点,优先级高于openIds，当true时忽略openIds|boolean|no|false|
|openIds|指定默认打开的节点id|array|no|[]|
|itemStyle|指定item项的样式,其中包含三个子项backgroudColor：背景的颜色, fontSize：字体大小, color：字体的颜色|css style|no|{}|
|selectedItemStyle|指定点击按钮选中时的样式,其中包含三个子项backgroudColor：选中时的颜色, fontSize：选中时的字体大小, color：选中时字体的颜色|css style|no|{}|

3.本地运行
在本地运行，首先得克隆该项目，使用下面命令进行克隆
  先克隆该项目
  ```
  git clone https://github.com/suwu150/react-native-tree-select.git
  ```
  然后进入项目，cd treeSelectExample进入到演示项目，通过以下命令安装依赖
  ```
  npm install
  ```
  通过以下命令运行项目
  ```
  react-native run-ios
  ```
4.组件简介
能够按照数据结构进行展开树状结构，通常用来进行展示具有明显层级关系的数据结构
