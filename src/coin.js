import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image} from 'react-native'


export default class Coin extends React.Component {

    getImageByValue = (value) =>
    {
        if(value === 0)
            return  (<Image style = {{width:200, height:200}} source = {require("./img/coin-heads.png")} />)
        else
            return  (<Image style = {{width:200, height:200}} source = {require("./img/coin-tails.png")} />)
    }
    
    render() {
        
        return (
        <TouchableWithoutFeedback onPress= {this.props.onPress}>    
           {this.getImageByValue(this.props.value)}
        </TouchableWithoutFeedback>
        )
    }
}
