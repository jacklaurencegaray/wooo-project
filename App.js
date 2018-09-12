import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { StyleSheet, Text, View } from 'react-native'

import Login from './app/screens/Login'

const RootStack = createStackNavigator({
  Login: {
    screen: Login
  }
})

export default class App extends React.Component {

  render() {
    return <RootStack />
  }
}

