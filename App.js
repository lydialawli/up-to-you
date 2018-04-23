import React from 'react'
import { StyleSheet, Text, View, Button, Image, Dimensions} from 'react-native'
import ImageHandler from './src/ImageHandler.js'
import ScreenOriented from './src/ScreenOriented.js'

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
    disabled: false,
    orientation: ScreenOriented.isPortrait() ? 'portrait' : 'landscape'
  }

  Dimensions.addEventListener('change', () => {
    this.setState({
        isPortrait: ScreenOriented.isPortrait(),
        orientation: ScreenOriented.isPortrait() ? 'portrait' : 'landscape'
    })
  })
}

  startWaitingModeCoin=()=>
  {
    this.setState({
      currentCoinImage : coinProperties.waitingCoinImage,
      disabled: true
    })
    setTimeout(()=>{this.setResultCoin()}, 1000);
  }

  setResultCoin()
  {
    this.setState({
      currentCoinImage : coinProperties.faces[Math.round(Math.random())],
      disabled: false,
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
      disabled : true,
    })
    setTimeout(()=>{this.setResultDice()}, 1500);
  }

  setResultDice()
  {
    this.setState({
      currentDiceImage : diceProperties.faces[Math.floor(Math.random()*6)],
      disabled : false
    })
  }
  
  onDicePressed=()=>
  {
    this.startWaitingModeDice()
    console.log(this.state.currentDiceImage)    
  }

  getStyle=(isPortrait)=>
  {
    if(isPortrait){
      return{
        flex: 1,
        flexDirection: 'column', 
        backgroundColor: 'darksalmon',
        alignItems: 'center',
        justifyContent: 'space-around'
      }
    }
    else{
      return {
        flex: 1,
        flexDirection: 'row', 
        backgroundColor: 'darksalmon',
        alignItems: 'center',
        justifyContent: 'space-around',
      }
    }
  }


  render() {

    return (
      <View  style = {this.getStyle(this.state.isPortrait)}>   
        <ImageHandler onPress= {this.onCoinPressed} image = {this.state.currentCoinImage} disabled = {this.state.disabled}/>
        <ImageHandler onPress= {this.onDicePressed} image = {this.state.currentDiceImage} disabled = {this.state.disabled}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', 
    backgroundColor: 'darksalmon',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
})



/*
<Text>
Dimensions = {JSON.stringify(Dimensions.get('screen'))}{'\n'}
isPortrait = {ScreenOriented.isPortrait() ? 'true\n' : 'false\n'}
isLandscape = {ScreenOriented.isLandscape() ? 'true\n' : 'false\n'}
</Text>
*/