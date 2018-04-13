import React from 'react'
import { StyleSheet, Text, View, Button, Image} from 'react-native'
import ImageHandler from './src/ImageHandler.js'



let diceProperties ={
  faces: [
      require('./src/dice-img/dice-1.png'),
      require('./src/dice-img/dice-2.png'),
      require('./src/dice-img/dice-3.png'),
      require('./src/dice-img/dice-4.png'),
      require('./src/dice-img/dice-5.png'),
      require('./src/dice-img/dice-6.png'),    
  ],
  waitingDiceImage: require('./src/dice-img/dice-rolling.gif')
}

let coinProperties ={
  faces: [
      require('./src/coin-img/coin-heads.png'),
      require('./src/coin-img/coin-tails.png')
    ],
  waitingCoinImage: require('./src/coin-img/coin-fliping.gif')
}


export default class App extends React.Component {

constructor(props)
{
  super(props)
  this.state={
    currentCoinImage:coinProperties.faces[0],
    currentDiceImage: diceProperties.faces[2],
    disabled: true
  }
}

  startWaitingModeCoin=()=>
  {
    this.setState({
      currentCoinImage : coinProperties.waitingCoinImage
    })
    setTimeout(()=>{this.setResultCoin()}, 1000);
  }

  setResultCoin()
  {
    this.setState({
      currentCoinImage : coinProperties.faces[Math.round(Math.random())]
    })
  }
 
  onCoinPressed=()=>
  {
    this.startWaitingModeCoin()
    console.log(this.state.currentCoinImage)
  }

  
  startWaitingModeDice=()=>
  {
    this.setState({
      currentDiceImage : diceProperties.waitingDiceImage,
    })
    setTimeout(()=>{this.setResultDice()}, 1500);
  }

  setResultDice()
  {
    this.setState({
      currentDiceImage : diceProperties.faces[Math.floor(Math.random()*6)],
    })
  }
  
  onDicePressed=()=>
  {
    this.startWaitingModeDice()
    console.log(this.state.currentDiceImage)
    
  }

  disabling=()=>{
    if (this.currentDiceImage === diceProperties.waitingDiceImage) 
        {this.setState({disabled: true})}
    else {this.setState({disabled: false})}
  }

  render() {

    return (
      <View  style = {styles.container}>    
        <ImageHandler onPress= {this.onCoinPressed} image = {this.state.currentCoinImage}/>
        <ImageHandler onPress= {this.onDicePressed} image = {this.state.currentDiceImage} disabled = {this.state.disabling}/>
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
