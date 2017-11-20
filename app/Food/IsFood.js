import React, {Component} from 'react'
// 引入组件
import {
    View,
    ScrollView,
    Text,
    StyleSheet
} from 'react-native'

import TopBar from './Topbar/TopBar'
import Feature from './Feature/Feature'

export default class IsFood extends Component {
  render () {
    return (
      <View style={styles.container}>
        <TopBar />
        <ScrollView>
          <Feature />
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
          <Text>Test</Text>
        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  }
})
