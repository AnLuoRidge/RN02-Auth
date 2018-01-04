import React, { Component } from 'react'
import { Button, Card, CardSection, Input } from './common'

export default class LoginForm extends Component {

    state = { text:''}

    render() {
        // const { textInputStyle } = styles

        return(
            <Card>
                <CardSection>
                    <Input
                        // style={textInputStyle}
                        label='Email'
                        onChangeText={text => this.setState({text})}
                        value={this.state.text}
                    />
                </CardSection>
                <CardSection/>
                <CardSection>
                    <Button>Log in</Button>
                </CardSection>
            </Card>
        )
    }
}

// const styles = {
//     textInputStyle: {
//         height: 10,
//         width: 200
//     }
// }