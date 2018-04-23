import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image} from 'react-native'


export default class extends React.Component {

    render() {
        
        return (
            <TouchableWithoutFeedback disabled={this.props.disabled} onPress= {this.props.onPress}>    
                <Image style = {{width:200, height:200}} source = {this.props.image} />
            </TouchableWithoutFeedback>
        )
    }
}
                  