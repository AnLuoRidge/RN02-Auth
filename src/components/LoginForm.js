import React, { Component } from 'react'
import { Text } from 'react-native'
import { Button, Card, CardSection, Input, Spinner } from './common'
import firebase from 'firebase'

export default class LoginForm extends Component {

  // DEBUG
    // state = { email:'', password:'', error:''}
  state = { email:'test@mail.com', password:'password', error:'', isLogging:false }

  // Logic of Log-in
    onButtonPress () {
    this.setState({error:'', isLogging:true})
    const { email, password } = this.state

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(() => {this.onLoginSuccess.bind(this)
            console.log('account created')})
          .catch(this.onLoginFail.bind(this))
      })

      this.setState({isLogging:false})
    }

    onLoginSuccess () {
      this.setState({
        email:'',
        password:'',
        isLogging:false,
        error:''})
      console.log('Login success')
    }

    onLoginFail () {
      this.setState({
        error: 'Authentication Failed.',
      isLogging:false})
    }
    // show log-in btn or spinner
  renderButton () {
    if (!this.state.isLogging) {
      return (
        <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>
      )
    }
    return (
        <Spinner size={'small'}/>
      )
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
              <Text style={styles.errorStyle}>
                {/*no value no show*/}
                {this.state.error}
              </Text>
                <CardSection>
                  {this.renderButton()}
                </CardSection>
            </Card>
        )
    }


}

const styles = {
  errorStyle: {
    fontSize: 20 ,
    color: 'red',
    alignSelf: 'center'
  }
}