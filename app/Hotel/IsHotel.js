import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class IsHotel extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    银行
                </Text>
            </View>
        );
    }
}

IsHotel.propTypes = {};
IsHotel.defaultProps = {};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : "center"
    }
})

