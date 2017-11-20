import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class IsBank extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>
                    银行
                </Text>
      </View>
    )
  }
}

IsBank.propTypes = {}
IsBank.defaultProps = {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
