import React, {Component} from 'react'
import {
    Text,
    StyleSheet
} from 'react-native'
// 引入页面
import IsFood from '../Food/IsFood'
import IsMovie from '../Movie/IsMovie'
import IsBank from '../Bank/IsBank'
import IsHotel from '../Hotel/IsHotel'
// tab
import TabNavigator from 'react-native-tab-navigator'

class IsMain extends Component {
  constructor () {
    super()
    this.state = {
      selectedTab: 'food'  // 默认选中美食页面
    }
  }
  render () {
    return (
            // 配置 tab 选项
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'food'}
          title='美食'
          renderIcon={() => (<Text style={styles.icon}>&#xe9a3;</Text>)}
          renderSelectedIcon={() => (<Text style={[styles.icon, styles.selectedIcon]}>&#xe9a3;</Text>)}
          badgeText='1'
          onPress={() => this.setState({ selectedTab: 'food' })}>
          <IsFood />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'movie'}
          title='电影'
          renderIcon={() => (<Text style={styles.icon}>&#xe914;</Text>)}
          renderSelectedIcon={() => (<Text style={[styles.icon, styles.selectedIcon]}>&#xe914;</Text>)}
          onPress={() => this.setState({ selectedTab: 'movie' })}>
          <IsMovie />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'bank'}
          title='银行'
          renderIcon={() => (<Text style={styles.icon}>&#xe93e;</Text>)}
          renderSelectedIcon={() => (<Text style={[styles.icon, styles.selectedIcon]}>&#xe93e;</Text>)}
          onPress={() => this.setState({ selectedTab: 'bank' })}>
          <IsBank />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'hotel'}
          title='酒店'
          badgeText='5'
          renderIcon={() => (<Text style={styles.icon}>&#xe903;</Text>)}
          renderSelectedIcon={() => (<Text style={[styles.icon, styles.selectedIcon]}>&#xe903;</Text>)}
          onPress={() => this.setState({ selectedTab: 'hotel' })}>
          <IsHotel />
        </TabNavigator.Item>
      </TabNavigator>
        )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {  // 图标
    fontSize: 24,
    width: 24,
    height: 24,
    lineHeight: 24,
    fontFamily: 'icomoon',
    textAlign: 'center'
  },
  selectedIcon: { // 选中图标
    color: '#007AFF'
  }
})

export default IsMain
