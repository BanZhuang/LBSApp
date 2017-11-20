import React, {PureComponent} from 'react'
import {
    View,
    Image,
    StyleSheet
} from 'react-native'

class LauncherPage extends PureComponent {
  render () {
    return (
      <View style={styles.container}>
        <Image source={{uri: 'wellcome'}} style={styles.launcher} />
      </View>
    )
  }

  componentDidMount () {
         // console.log('====================>', this.props.navigation.navigate('Main'));
    setTimeout(() => this.props.navigation.navigate('Main'), 2000)
  }
}

LauncherPage.propTypes = {}
LauncherPage.defaultProps = {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  launcher: {
    width: '100%',
    height: '100%'
  }
})
export default LauncherPage
