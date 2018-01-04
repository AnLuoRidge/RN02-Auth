import React, { Component } from 'react'
import { Button, Card, CardSection, Input } from './common'
import firebase from 'firebase'

export default class LoginForm extends Component {

    state = { email:'', password:'', error:''}

    onButtonPress () {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {console.log('success')})
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(() => {console.log('account created')})
        this.setState({error: 'Authentication Failed.'})

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
                    />
                </CardSection>
                <CardSection>
                  <Input
                    label='Password'
                    onChangeText={password => this.setState({password})}
                    value={this.state.password}
                  />
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>
                </CardSection>
            </Card>
        )
    }
}
