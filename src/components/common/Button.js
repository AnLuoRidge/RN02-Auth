import React from 'react'
import {TouchableOpacity, Text} from 'react-native'

const Button = ({children: buttonTitle, onPress}) => {

    const { buttonStyle, textStyle } = styles

    return (
        <TouchableOpacity
            style={buttonStyle}
            onPress={onPress}>
            <Text style={textStyle}>{buttonTitle}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    buttonStyle: {
        flex: 1,// extend as much as it can
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color:'#007aff',
        fontSize: 16,
        fontWeight: '600',// borderness
        paddingTop: 10,
        paddingBottom: 10
    }
}

export { Button }