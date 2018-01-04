import React, { Component } from 'react'
import { Text } from 'react-native'
import { Button, Card, CardSection, Input } from './common'
import firebase from 'firebase'

export default class LoginForm extends Component {

  // DEBUG
    // state = { email:'', password:'', error:''}
  state = { email:'test@mail.com', password:'password', error:''}

    onButtonPress () {
    this.setState({error:''})
    const { email, password, error } = this.state
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({email:'', password:''})
        console.log('success')
      })
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(() => {console.log('account created')})
          .catch(() => {
            this.setState({error: 'Authentication Failed.'})
          })
      })
  }

    render() {
        return(
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        onChangeText={email => this.setState({email})}
                        value={this.state.email}
                        placeholder='User@mail.com'
                        keyboardType={'email-address'}
                    />
                </CardSection>
                <CardSection>
                  <Input
                    label='Password'
                    onChangeText={password => this.setState({password})}
                    value={this.state.password}
                    placeholder='password'
                    secureTextEntry
                    // keyboardType={'ascii-capable'}
                  />
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>
                </CardSection>
              <Text>
                {this.state.error}
              </Text>

            </Card>
        )
    }
}
