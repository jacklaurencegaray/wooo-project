

import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D74177',
        alignItems: 'center'
    }
})

export default class Loading extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>{ this.props.loadingMessage || 'Loading...' }</Text>
            </View>
        )
    }
}
