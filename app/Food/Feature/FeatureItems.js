import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    listView,
    Dimensions,
} from 'react-native'

// 获取屏幕宽高
const { width, height } = Dimensions.get('window')

export default class FeatureItems extends Component {
  constructor ( props ) {
    super()
      //获取数据
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}) // 判断一行发生变化
      // 设置状态来初始化数据
      this.state = {
          dataSource : ds.cloneWithRows(props.dataSourceArr)
      }
  }

    // 定义每一行渲染的格式
    renderRow(rowData){
        return (
            <View style={styles.boxStyle}>
                <Image source={{uri:rowData.image}} style={{width:50, height:50}}/>
                <Text>{rowData.title}</Text>
            </View>
        )}

    // renderItem({ item, index }) {
    //     return <Text style={styles.boxStyle}>{item}</Text>;
    // }

  render () {
    return (
        <ListView
            // 数据源（必填）
            dataSource={this.state.dataSource}
            // 行渲染规则（必填）
            renderRow={this.renderRow}
            // 组件内容渲染
            contentContainerStyle={styles.contentStyle}
        />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    //     // flexDirection: 'row',
    // backgroundColor: '#ccc',
    // height: 150,
    // width: '100%'
    //     // padding: 8,
    //     // alignItems: 'center',
    //     // justifyContent:'space-around'
  },
    boxStyle: {
        width:70,
        height:70
        //
        // //marginLeft : ?? //  算法（width-50*5）/ （5+1）
        // alignItems : 'center',
        //
        // marginTop : 10
  }
})
