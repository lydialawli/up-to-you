import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class App extends React.Component {
  getRandomQuote(){
    return "unga bunga!"
  }

  render() {
    let quote = "life is good"
    console.log(this.getRandomQuote())
    return (
      <View style={styles.container}>
        <Text>{quote}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
