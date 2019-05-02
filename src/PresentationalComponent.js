import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'space-around',
    },
    textSmall: {
      fontSize: 10,
      color: "green",
    },
 
  
  })

export default class PresentationalComponent extends React.Component {
    
    render(){
        return (
            <View style={styles.container}>

                <Button
                    title= {this.props.quote}
                    color= 'transparent'
                    onPress= {this.props.onPressed}>
                    
                </Button>
    
                <Text style={styles.textSmall}>
                    {this.props.quote}
                </Text>

            </View>
        )
    }
}

/*
bg1:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: 'powderblue'}, 
   
<View style={styles.bg1} >
    <Text style={styles.textSmall}>
        {this.props.quote}
    /Text>
</View> 
*/