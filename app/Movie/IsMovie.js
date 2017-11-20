import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class IsMovie extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>
                    电影页
                </Text>
      </View>
    )
  }
}

IsMovie.propTypes = {}
IsMovie.defaultProps = {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
