import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from './src/components/common'
import LoginForm from './src/components/LoginForm'
import firebase from 'firebase'
import { FIREBASE_CONFIG } from './src/config'

export default class App extends React.Component {
  componentWillMount () {
    firebase.initializeApp(FIREBASE_CONFIG)
  }

  render () {
    return (
      <View>
        <Header>Sign in</Header>
        <LoginForm />
      </View>
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
