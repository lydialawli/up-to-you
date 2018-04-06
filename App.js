import React from 'react'
import { StyleSheet, Text, View, Button, Image} from 'react-native'
import Coin from './src/coin.js'
import Dice from './src/dice.js'

var diceSides = [
  require('./src/img/dice-1.png'),
  require('./src/img/dice-2.png'),
  require('./src/img/dice-3.png'),
  require('./src/img/dice-4.png'),
  require('./src/img/dice-5.png'),
  require('./src/img/dice-6.png'),
]

export default class App extends React.Component {

constructor(props)
{
  super(props)

  this.state={
    currentValue:0
  }
}

  startWaitingMode=()=>
  {
    this.setState({
      currentValue : 2
    })

    setTimeout(()=>{this.setResult()}, 2000);
  }

  setResult()
  {
    this.setState({
      currentValue : Math.round(Math.random())
    })
  }

  onCoinPressed=()=>
  {
    this.startWaitingMode()
    console.log(this.state.currentValue)
  }
 
  render() {

    return (
      <View  style = {styles.container}>    
        <Coin onPress= {this.onCoinPressed} value = {this.state.currentValue} />
        <Dice onPress= {this.onCoinPressed} value = {this.state.currentValue} options={diceSides}/>
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
