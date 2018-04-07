import React from 'react'
import { StyleSheet, Text, View, Button, Image} from 'react-native'
import ImageHandler from './src/ImageHandler.js'

var diceSides = [
  require('./src/img/dice-1.png'),
  require('./src/img/dice-2.png'),
  require('./src/img/dice-3.png'),
  require('./src/img/dice-4.png'),
  require('./src/img/dice-5.png'),
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
      currentValue : Math.floor(Math.random()*diceSides.length)
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
        <ImageHandler onPress= {this.onCoinPressed} value = {this.state.currentValue} options={coinSides}/>
        <ImageHandler onPress= {this.onCoinPressed} value = {this.state.currentValue} options={diceSides}/>
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
