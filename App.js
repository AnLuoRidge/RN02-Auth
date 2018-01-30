import React from 'react'
import { View } from 'react-native'
import {Button, Header, Spinner} from './src/components/common'
import LoginForm from './src/components/LoginForm'
import firebase from 'firebase'
import { FIREBASE_CONFIG } from './src/config'

export default class App extends React.Component {

  // use undefined to 3 states
  // null
  state = { isLogged: null }

  componentWillMount () {
    firebase.initializeApp(FIREBASE_CONFIG)

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({isLogged:true})
        } else {
          this.setState({isLogged:false})
        }
      }
    )
  }

  logOut () {
    firebase.auth().signOut()
  }

  renderContent () {
    switch (this.state.isLogged) {
      case true:
        return (
          <View style={{height:43}}>
            <Button onPress={this.logOut}>Log out</Button>
          </View>
            )

      case false:
        return <LoginForm />

      default:
        return <Spinner size="large"/>
    }
  }
  render () {
    return (
      <View>
      <Header>Authentication</Header>
    {this.renderContent()}
      </View>
    )
  }
}
