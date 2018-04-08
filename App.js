import React from 'react'
import { StyleSheet, Text, View, Button, Image} from 'react-native'
import ImageHandler from './src/ImageHandler.js'

var diceSides = [
  require('./src/img/dice-1.png'),
  require('./src/img/dice-2.png'),
  require('./src/img/dice-3.png'),
  require('./src/img/dice-4.png'),
  require('./src/img/dice-5.png'),
  require('./src/img/dice-6.png'),
  require('./src/img/testing.gif')
]

var coinSides = [
  require('./src/img/coin-heads.png'),
  require('./src/img/coin-tails.png'),
  require('./src/img/coin-fliping.png')
]

export default class App extends React.Component {

constructor(props)
{
  super(props)
  this.state={
    currentCoinValue:0,
    currentDiceValue:2
  }
}

  startWaitingModeCoin=()=>
  {
    this.setState({
      currentCoinValue : 2
    })

    setTimeout(()=>{this.setResultCoin()}, 1000);
  }

  setResultCoin()
  {
    this.setState({
      currentCoinValue : Math.round(Math.random())
    })
  }

  onCoinPressed=()=>
  {
    this.startWaitingModeCoin()
    console.log(this.state.currentCoinValue)
  }



  
  startWaitingModeDice=()=>
  {
    this.setState({
      currentDiceValue : 6
    })
    setTimeout(()=>{this.setResultDice()}, 1000);
  }

  setResultDice()
  {
    this.setState({
      currentDiceValue : Math.floor(Math.random()*6)
    })
  }
  
  onDicePressed=()=>
  {
    this.startWaitingModeDice()
    console.log(this.state.currentDiceValue)
  }

  render() {

    return (
      <View  style = {styles.container}>    
        <ImageHandler onPress= {this.onCoinPressed} value = {this.state.currentCoinValue} options={coinSides}/>
        <ImageHandler onPress= {this.onDicePressed} value = {this.state.currentDiceValue} options={diceSides}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'deepskyblue',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
})
