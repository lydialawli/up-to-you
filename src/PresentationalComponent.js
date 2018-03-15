import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    textSmall: {
      fontSize: 10,
      color: "green",
    },
    bg1:{flex: 1, backgroundColor: 'powderblue'},
    bg2:{flex: 2, backgroundColor: 'skyblue', width:100},
    bg3:{flex: 3, backgroundColor: 'steelblue'},
  })

export default class PresentationalComponent extends React.Component {
    
    render(){
        console.log("I am awesome, you are not")
        
        return (
            <View style={styles.container}>
                <View style={styles.bg1} >
                    <Text style={styles.textSmall}>
                        {this.props.quote}
                    </Text>
                </View>
                <View style={styles.bg2} >
                    <Text style={styles.textSmall}>
                        {this.props.quote}
                    </Text>
                </View><View style={styles.bg3} >
                    <Text style={styles.textSmall}>
                        {this.props.quote}
                    </Text>
                </View>

                <Button
                    title= {this.props.quote}
                    color= "#e9967a"
                    onPress= {this.props.onPressed}>
                </Button>
    
                <Text style={styles.textSmall}>
                    {this.props.quote}
                </Text>

            </View>
        )
    }
}
