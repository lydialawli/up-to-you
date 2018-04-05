import React from 'react'
import { StyleSheet, Text, View, Button, Image} from 'react-native'
import Coin from './src/coin.js'

export default class App extends React.Component {

constructor(props)
{
  super(props)

  this.state={
    currentValue:0
  }
}

  onCoinPressed=()=>
  {
    this.setState({
      currentValue : Math.round(Math.random())
    })

    console.log(this.state.currentValue)
  }

  render() {

    return (
      <View  style = {styles.container}>    
        <Coin onPress= {this.onCoinPressed} value = {this.state.currentValue} />
       
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'deepskyblue',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
