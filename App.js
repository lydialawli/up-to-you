import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'
import QuoteFactory from './src/QuoteFactory.js' 

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
      <View style={styles.container}>

        <Button
          title= {this.state.quote}
          style= ""
          color= "#e9967a"
          onPress= {this.onPressed}>
        </Button>
    
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
  },
  textSmall: {
    fontSize: 10,
    color: "green",
  }
})
