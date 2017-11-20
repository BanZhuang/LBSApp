import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity

} from 'react-native'

export default class TopBar extends Component {
  render () {
    return (
      <View style={styles.container}>
          {/*定位*/}
        <TouchableOpacity>
          <View style={styles.address}>
            <Text style={{color: '#fff', fontSize: 14}}>成都</Text>
            <View style={styles.arrow} />
          </View>
        </TouchableOpacity>
          {/*搜索栏*/}
        <View style={styles.search}>
            <TouchableOpacity>
                <Text style={{fontFamily: 'icomoon', fontSize: 18, color: '#8c8c8c'}}>&#xe986;</Text>
            </TouchableOpacity>
                <Text>输入商家/品类/商圈</Text>
        </View>
          {/*用户*/}
        <TouchableOpacity>
          <Text style={{fontFamily: 'icomoon', fontSize: 26, color: '#eee'}}>&#xe971;</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
        // flex : 1,
    flexDirection: 'row',
    backgroundColor: '#007AFF',
    height: 50,
    width: '100%',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  address: {
    width: 54,
    height: 24,
    alignItems: 'center',
    flexDirection: 'row'
  },
  arrow: {
    borderWidth: 1,
    borderColor: '#ccc',
    height: 8,
    width: 8,
    transform: [ {rotate: '45deg' } ],
    marginLeft: 6,
    borderTopWidth: 0,
    borderLeftWidth: 0
  },
  search: {
    width: '74%',
    flexDirection: 'row',
    height: 30,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#eee',
    padding: 5,
    marginLeft: 4,
    marginRight: 4,
    borderRadius: 26
  }
})
