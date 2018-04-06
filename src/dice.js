import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image} from 'react-native'

var diceSides = [
    require('./img/dice-1.png'),
    require('./img/dice-2.png'),
    require('./img/dice-3.png'),
    require('./img/dice-4.png'),
    require('./img/dice-5.png'),
    require('./img/dice-6.png')
]

export default class Dice extends React.Component {

    
    getImageByValue = (value) =>
    {
        return <Image style = {{width:200, height:200}} source = {diceSides[value]} />
    }
    
    render() {
        
        return (
            <TouchableWithoutFeedback onPress= {this.props.onPress}>    
                {this.getImageByValue(this.props.value)}
            </TouchableWithoutFeedback>
        )
    }
}

/*
if(value === 0)
            return  (<Image style = {{width:200, height:200}} source = {require("./img/coin-heads.png")} />)
        else if(value ===1)
            return  (<Image style = {{width:200, height:200}} source = {require("./img/coin-tails.png")} />)
        else if(value ===2)
            return  (<Image style = {{width:200, height:200}} source = {require("./img/coin-fliping.png")} />)
*/
