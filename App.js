import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from "./src/components/common";
import LoginForm from './src/components/LoginForm'
import firebase from 'firebase'

export default class App extends React.Component {
  componentWillMount() {
  firebase.initializeApp ({
      // move to config.js
      /*
      apiKey:
      authDomain:
      databaseURL:
      storageBucket:
      projectId: */
  })
  }

  render() {
    return (
        <View>
            <Header>Sign in</Header>
            <LoginForm />
        </View>
    );
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
