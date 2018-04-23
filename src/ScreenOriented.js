import React from 'react'
import { Text, Dimensions} from 'react-native'

const dim = Dimensions.get('screen');

const isPortrait =()=> {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
}

const isLandscape = () => {
    const dim = Dimensions.get('screen');
    return dim.width >= dim.height;
}

export default {
    isPortrait,
    isLandscape
}