import React, { Component } from 'react'
import TextInput from './TextInput'
import { Button, Card, CardSection } from './common'

export default class LoginForm extends Component {

    state = { text:''}

    render() {
        const { textInputStyle } = styles

        return(
            <Card>
                <CardSection/>
                    <TextInput
                        style={textInputStyle}
                        onChangeText={text => this.setState({text})}
                        value={this.state.text}
                    />
                <CardSection/>
                <CardSection>
                    <Button>Log in</Button>
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    textInputStyle: {
        height: 10,
        width: 200
    }
}