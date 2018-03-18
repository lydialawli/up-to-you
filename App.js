import React from 'react'
import { StyleSheet, Text, View, Button, Images} from 'react-native'
import QuoteFactory from './src/QuoteFactory.js' 
import PresentationalComponent from './src/PresentationalComponent.js'
import ImagesExamples from './src/ImagesExamples.js'

export default class App extends React.Component {

  constructor(){
    super()
    this.state = {
      quote : "click me if you want to be wiser"
    }
  }

  onPressed=()=>{
    let newquote = QuoteFactory.getRandomQuote()
    this.setState({quote:newquote}) 
  }

  render() {

    return (
      <View style = {styles.container}>    
        <PresentationalComponent
          quote = {this.state.quote} 
          onPressed = {this.onPressed}/>
        <ImagesExamples/>
      </View>
    )
  }
}

const uniPerson = () => {
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
