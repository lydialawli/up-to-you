import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image} from 'react-native'


export default class Coin extends React.Component {

    getImageByValue = (value) =>
    {
        return <Image style = {{width:200, height:200}} source = {this.props.options[value]} />
    }
    
    render() {
        
        return (
        <TouchableWithoutFeedback onPress= {this.props.onPress}>    
           {this.getImageByValue(this.props.value)}
        </TouchableWithoutFeedback>
        )
    }
}
