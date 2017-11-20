import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions
} from 'react-native'

// 获取屏幕宽高
const { width } = Dimensions.get('window')

export default class Feature extends Component {
  constructor () {
    super()
    this.state = {
      activePage: 1
    }
  }
    // 滚动窗口
  rollWindow () {
        // 初始化
    let itemViewArr = []

        // 获取数据
    let datas = ['#fffec9', '#3ff', '#ccc']

    for (var i = 0; i < datas.length; i++) { // 循环2次
      itemViewArr.push(
        <View key={i} style={{backgroundColor: datas[i], width: width, height: 150 }}>
          <Text>{i}</Text>
        </View>
            )
    }
    return itemViewArr
  }

    // 窗口滚动事件
  handleRollEnd (e) {
    let scrollEndX = e.nativeEvent.contentOffset.x  // 获取当前窗口滚动位置
    let activePage = Math.floor(scrollEndX / width) + 1
        // console.log( activePage );
    this.setState({
      activePage: activePage
    })
  }

    // 滚动窗口指示器
  rollIndicator () {
        // 初始化指示器,颜色
    let indicator = [], activeColor, datas = ['#dbe64f', '#3ff', '#ccc']
    for (let i = 1; i <= datas.length; i++) {
            // 切换当前指示器颜色
      activeColor = (this.state.activePage === i ? '#36e' : '#ccc')
      indicator.push(
        <Text key={i} style={{color: activeColor, fontSize: 30, marginTop:-8, marginBottom:-8}}>&bull;</Text>
            )
    }
    return indicator
  }

  render () {
    return (
      <View>
        <ScrollView
          style={styles.container}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onMomentumScrollEnd={(e) => this.handleRollEnd(e)}
                >
          {this.rollWindow()}
        </ScrollView>
        <View style={styles.indicator}>
          {this.rollIndicator()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
        // flexDirection: 'row',
    backgroundColor: '#ccc',
    height: 150,
    width: '100%'
        // padding: 8,
        // alignItems: 'center',
        // justifyContent:'space-around'
  },
  indicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
})
