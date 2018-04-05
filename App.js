import React from 'react'
import { StyleSheet, Text, View, Button, Images} from 'react-native'
import ImagesExamples from './src/ImagesExamples.js'
export default class App extends React.Component {

  state = {
    coin: <ImagesExamples/>

  }

  render() {

    return (
      <View style = {styles.container}>    
        {this.state.coin}
        
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
