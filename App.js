import React from 'react'
import { StyleSheet, Text, View, Button, Image} from 'react-native'
import Coin from './src/coin.js'

export default class App extends React.Component {

  render() {

    return (
      <View style = {styles.container}>    
        <Coin value = {Math.floor(Math.random())} />
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
