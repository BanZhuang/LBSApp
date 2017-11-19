import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'
import IsFood from '../Food/IsFood'
import IsMovie from '../Movie/IsMovie'
import IsBank from '../Bank/IsBank'
import IsHotel from '../Hotel/IsHotel'

import TabNavigator from 'react-native-tab-navigator';

class IsMain extends Component {
    constructor(){
        super()
        this.state={
            selectedTab : 'food'
        }
    }
    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'food'}
                    title="美食"
                    renderIcon={() => <Image source={{uri:'food'}} style={styles.icon}/>}
                    renderSelectedIcon={() => <Image source={{uri:'foodsed'}} style={styles.icon}/>}
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'food' })}>
                    <IsFood></IsFood>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'movie'}
                    title="电影"
                    renderIcon={() => <Image source={{uri:'movie'}} style={styles.icon}/>}
                    renderSelectedIcon={() => <Image source={{uri:'moviesed'}} style={styles.icon}/>}
                    // renderBadge={() => <CustomBadgeView />}
                    onPress={() => this.setState({ selectedTab: 'movie' })}>
                    <IsMovie></IsMovie>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'bank'}
                    title="银行"
                    renderIcon={() => <Image source={{uri:'bank'}} style={styles.icon}/>}
                    renderSelectedIcon={() => <Image source={{uri:'banksed'}} style={styles.icon}/>}
                    // renderBadge={() => <CustomBadgeView />}
                    onPress={() => this.setState({ selectedTab: 'bank' })}>
                    <IsBank></IsBank>
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'hotel'}
                    title="酒店"
                    badgeText="5"
                    renderIcon={() => <Image source={{uri:'hotel'}} style={styles.icon}/>}
                    renderSelectedIcon={() => <Image source={{uri:'hotelesed'}} style={styles.icon}/>}
                    // renderBadge={() => <CustomBadgeView />}
                    onPress={() => this.setState({ selectedTab: 'hotel' })}>
                    <IsHotel></IsHotel>
                </TabNavigator.Item>

            </TabNavigator>

        );
    }
}

IsMain.propTypes = {};
IsMain.defaultProps = {};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : "center"
    },
    icon : {
        width : 22,
        height : 22
    }
})

export default IsMain;
