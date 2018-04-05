import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image} from 'react-native'


export default class Coin extends React.Component {

    getImageByValue = (value) =>
    {
        if(value === 0)
            return  (<Image style = {{width:200, height:200}} source = {require("./img/coin-heads.png")} />)
        else if(value ===1)
            return  (<Image style = {{width:200, height:200}} source = {require("./img/coin-tails.png")} />)
        else if(value ===2)
            return  (<Image style = {{width:200, height:200}} source = {require("./img/coin-fliping.png")} />)
    }
    
    render() {
        
        return (
        <TouchableWithoutFeedback onPress= {this.props.onPress}>    
           {this.getImageByValue(this.props.value)}
        </TouchableWithoutFeedback>
        )
    }
}
