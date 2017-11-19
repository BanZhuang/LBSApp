import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class IsFood extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    美食页
                </Text>
            </View>
        );
    }
}

IsFood.propTypes = {};
IsFood.defaultProps = {};

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : "center"
    }
})

