import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import QuoteFactory from './src/QuoteFactory.js' 

export default class App extends React.Component {
  render() {
    let quote = "life is good"

    let factory = new QuoteFactory()
    console.log(factory)

    console.log(QuoteFactory)
    return (
      <View style={styles.container}>
        <Text>{quote}</Text>
        <Text style={styles.textSmall}>
      (I am just testing here, don't judge)
        </Text>
      </View>
    )
    
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
  },
  textSmall: {
    fontSize: 10,
    color: "green",
  }
})
