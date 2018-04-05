import React from 'react'
import { StyleSheet, Text, View, Button, Images} from 'react-native'
import ImagesExamples from './src/ImagesExamples.js'
export default class App extends React.Component {



  render() {

    return (
      <View style = {styles.container}>    
        <ImagesExamples/>
      </View>
    )
  }
}

const coin = () => {
  return (
     <ImagesExamples/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'deepskyblue',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
