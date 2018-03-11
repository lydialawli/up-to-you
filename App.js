import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'
import QuoteFactory from './src/QuoteFactory.js' 
import PresentationalComponent from './src/PresentationalComponent.js';

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
      </View>
    )
  
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#40f',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
